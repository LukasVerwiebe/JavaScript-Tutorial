// switch = statement that examines a value 
// for a match against many case clauses
// More efficient taht many "else if" statements

let garde = "h";

switch(garde){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break; 
    case "D":
        console.log("You passed ... barely!");
        break; 
    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log(garde, "is not a letter grade!");
}


let numberGarde = 95;

switch(true){
    case numberGarde >= 90:
        console.log("You did great!");
        break;
    case numberGarde >= 80:
        console.log("You did good!");
        break;
    case numberGarde >= 70:
        console.log("You did okay!");
        break; 
    case numberGarde >= 60:
        console.log("You passed ... barely!");
        break; 
    case numberGarde < 60:
        console.log("You FAILED!");
        break;
    default:
        console.log(numberGarde, "is not a letter grade!");
}