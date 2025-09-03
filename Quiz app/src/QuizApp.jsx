import React, { useState, useEffect } from "react";

export default function QuizApp() {
  const [quiz, setQuiz] = useState({ questions: [], index: 0, score: 0, finished: false, loading: true });

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=3&category=9&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const decode = (str) => {
          const txt = document.createElement("textarea");
          txt.innerHTML = str;
          return txt.value;
        };
        const questions = data.results.map((q) => ({
          question: decode(q.question),
          answers: [...q.incorrect_answers.map(decode), decode(q.correct_answer)].sort(() => Math.random() - 0.5),
          correct: decode(q.correct_answer),
        }));
        setQuiz({ ...quiz, questions, loading: false });
      });
  }, []);

  const handleNext = (selected) => {
    let updatedScore = quiz.score;
    if (selected === quiz.questions[quiz.index].correct) updatedScore++;
    const nextIndex = quiz.index + 1;
    setQuiz({
      ...quiz,
      index: nextIndex,
      score: updatedScore,
      finished: nextIndex >= quiz.questions.length,
    });
  };

  if (quiz.loading) return <div>Loading...</div>;
  if (quiz.finished) return <div>Your score: {quiz.score} / {quiz.questions.length}</div>;

  const current = quiz.questions[quiz.index];

  return (
    <div>
      <h3>{current.question}</h3>
      {current.answers.map((a, i) => (
        <button key={i} onClick={() => handleNext(a)}>
          {a}
        </button>
      ))}
    </div>
  );
}
