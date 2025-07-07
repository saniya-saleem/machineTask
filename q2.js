// Create an array of student objects, where each student has a name and a score.
// 1.	Use map() to create a new array containing only the student names.


// 2.	Use filter() to get the list of students who scored above 75.
// 3.	Use reduce() to calculate the average score.
// 4.	Write a function that takes a score as a parameter and returns a grade (A/B/C).s

let student =[
    {name:"saniya",score:85},
    {name:"sona",score:75},
    {name:"anandu",score:90},
    {name:"shahabas",score:70},

];


let studentName=student.map(students => students.name);
console.log(studentName);

let studentlist =student.filter(studentl =>studentl.score >75)
console.log(studentlist);

let avg =student.reduce((total,student)=>total+student.score,0)
let avgscore = avg/student.length;
console.log(avgscore);
  
function gradescore(score){
    if(score>=80){
        return "A"
    }
   else if(score>=70){
     return "B"

   }
   else {
       return "C"
   }
   
}

console.log(gradescore(70));
console.log(gradescore(60));
console.log(gradescore(90));

    

