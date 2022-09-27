// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to function() {}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
// variale i cannot exist outside of the for loop
//console.log(i);


for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}
// variale i can exist outside of the for loop
console.log(i);

doSomething();

function doSomething(){
    for(var j = 1; j <= 3; j+=1){
        //console.log(i);
    }
}
// variale j cannot exist outside of the function
console.log(j);


