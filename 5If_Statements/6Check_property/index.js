
document.getElementById("myButton").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox");
    if(myCheckBox.checked) {
        console.log("You are subscriped!");
    }
    else{
        console.log("You are NOT subscriped!");
    }
}