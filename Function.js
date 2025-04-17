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



let attempt = 0;

// password function
function checkPassword() 
{
let password = prompt("Please enter your password");

if (attempt >= 3)
{
    console.log("Your attempt has run out")
    return false;
}




if(password.length >= 8) {
    console.log("Strong Password");
}
else {
    console.log ("Weak password");
    attempt += 1;

    checkPassword()

}

}



function CheckUmur() {
    
let umur = prompt("Enter your age: ");

if (umur < 13){
    console.log("Kanak-kanak");
alert("Kanak-kanak");
}

else if(umur >= 13 && (umur < 19 )){
console.log("Remaja");
alert("Remaja");
}

else if(umur >=19 && (umur < 56)){
    console.log("Dewasa");
alert("Dewasa");
}

else {
    console.log("Warga Emas");
    alert("Warga Emas");
}
}


function CheckIC() {

    let umur = prompt("Enter your age");
    let IC = confirm("Do you have your IC?");

if(umur >= 18){

    if(IC){
        console.log("Welcome!");
    }
    else { console.log("Please give your IC");

    }
    
}else {console.log("You are not old enough to enter")}

}

function Checksize() {

    let jantina = prompt("Jantina?");
    let size = prompt("Enter your size!");


    switch (size) {

        case 'S':
        case 'M':
            console.log("Size Kecil");
            break;
        case 'L':
        case 'XL':
            console.log("Size biasa");
            break;
        default:
            console.log("Size Besar");
            break; 
    }
}

function Modulus() {
    let num = prompt("Enter a number: ");

    if(Number(num)) {
        alert("Only enter a number");
        
    }
    else {
        

    

    let remainder = num % 2;

    console.log("The remainder is this " + remainder)

    if(remainder == 1){
        console.log("The remainder is an Odd number");

    } 
    else {
        console.log("The remainder is an Even number");

    }
}

}