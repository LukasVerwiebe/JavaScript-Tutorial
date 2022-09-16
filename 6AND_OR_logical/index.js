// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (Either condition can be true)

let temp = 25;

if(temp > 0 && temp < 30){
    console.log("1. The weahter is good!");
}
else{
    console.log("1. The weahter is bad!");
}


let temp2 = -5;

if(temp2 <= 0 || temp2 >= 30){
    console.log("2. The weahter is bad!");
}
else{
    console.log("2. The weahter is good!");
}


let sunny = true;

if(temp > 0 && temp < 30 && sunny){
    console.log("3. The weahter is good!");
}
else{
    console.log("3. The weahter is bad!");
}