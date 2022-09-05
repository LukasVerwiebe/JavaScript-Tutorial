//console.log("Hello World!");
//window.alert("Dies ist ein Test.");

// Variablen
/*
 A variable is a container for storing data
 A variable behaves as if it was the value that it contains
*/

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Lukas"; // strings
let age = 21; // numbers
let student = true; // booleans

age = age +1;

// Ausgabe in der Konsole:
console.log("Enrolled", student);
console.log("Hello", firstName);
console.log("You are", age, "years old");

// Änderung eines HTML Tags mittels der ID
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


/*
    arithmetic expression is a combination of ...
    operands (values, variables, etc)
    operators (+ - * / % )
    that can be evaluated to value
    ex. y = x + 5;
*/

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;

//let extraStudents = students % 2;

//studnets += 1;
//students -= 1;
//students *= 2;
//tudents /= 2;

//console.log(students);
//console.log(extraStudents);

/* 
    operator precendece
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4);

console.log(result);

let result2 = (1 + 2) * (3 + 4);

console.log(result2);


