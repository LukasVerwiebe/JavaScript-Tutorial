// const = a variable that cant be changed (Konstante)

let pi = 3.14159;
const PI = 3.14159;
let radius;
let circumference;
let circumference2;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// Problem mit let kann varibale geändert werden
pi = 420.69;
// Mit const nicht da Fehlermeldung
//PI = 420.69;

circumference = 2 * PI * radius;
circumference2 = 2 * pi * radius;

console.log("The circumference is (const):", circumference);
console.log("The circumference is (let):", circumference2);

