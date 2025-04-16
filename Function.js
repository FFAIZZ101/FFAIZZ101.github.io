function addition () {
    let A = 5;
    let B = 3;

    console.log(A + B);
}

function subtraction (A , B) {
console.log(A - B);

}

function multiplication () {
    let A = 2;
    let B = 5;
    let result = A * B;

    //increment operator
    //result++

    //decrement operator
    result--
    console.log (result)
}

function division (A , B) {
    console.log (A / B);
}

function countdown () {
    let countdown = 10;

 while(countdown > 0) {
    console.log ("countdown " + countdown);
    countdown--;
 }
}





//marks function
function markah()
{

var markahPenuh = 50;
let markah1 = prompt("Enter markah 1");
let markah2 = prompt("Enter markah 2");
let markah3 = prompt("Enter markah 3");

var markahLabtask = {

    items:[
    { criteria: "TASK 1", marks: markah1},
    { criteria: "TASK 2", marks: markah2},
    { criteria: "TASK 3", marks: markah3}
    ],
    total: 0
};

// Calculate the total marks using += operator 
for (var i = 0; i < markahLabtask.items.length; i++) {
    markahLabtask.total += markahLabtask.items[i].marks;
}
// Calculate percentage
var percent = markahLabtask.total/markahPenuh * 100

console.log("Total Marks : " + markahLabtask.total);
console.log("Percentage : " + percent)
}





// password function
function checkPassword() {
let password = prompt("Please enter your password");


if(Number(password)){

if(password.length >= 8) {
    console.log("Strong Password");
} 
else{
    console.log("Weak Password");
}

} else {
    console.log("Enter Number Only");
}
}