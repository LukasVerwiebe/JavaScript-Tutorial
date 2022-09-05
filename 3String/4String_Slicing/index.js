// slice() extracts a section of a string and 
// returns it as a new String, without
// modifying the original string

let fullName = "Lukas Verwiebe";
let firstName;
let lastName;

//firstName = fullName.slice(0, 5);
//lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);


console.log(lastName);
console.log(firstName);
