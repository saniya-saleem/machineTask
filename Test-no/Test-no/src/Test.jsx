import React, { useEffect, useState } from "react";

function Test() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        const first10 = data.quotes.slice(0, 10);
        setQuotes(first10);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <div>
      <h2>Quotes List</h2>
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default Test;