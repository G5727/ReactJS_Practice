//JavaScript Object Creation and Access Assignment
let student =
{
    firstName: "Ganesh",
    lastName: "Nandyala",
    class: {
        name: "Introduction to JavaScript",
        teacher: { name: "Kumar", email: "kumar@training.com" }
    },
    grades: { javascript: "A", python: "B", Oracle: "D" }

}

//Print the student's full name using dot notation.

console.log('Full name is '+student.firstName + ' '+ student.lastName);

//Print the class name using bracket notation

console.log('Class name is '+ student['class'].name);

//Print the teacher's email using a mix of dot and bracket notation.

console.log('Teacher email is '+ student['class']['teacher'].email);

//Change the grade for one subject and print the updated grades object

student.grades.javascript  = 'B';

console.log('Updated grades are '+student['grades']);
console.log('Updated grades are '+student['grades'].javascript);
console.log('Updated grades are '+student['grades'].python);
console.log('Updated grades are '+student['grades'].Oracle);