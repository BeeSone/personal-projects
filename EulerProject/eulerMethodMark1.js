const readlineSync = require('readline-sync');

/*
const userInput = readlineSync.question('Please enter something: ');
console.log('You entered: ' + userInput);
*/

// var a and b globally defined with no value, type defined with parseFloat statements
var a;
var b;
var c;

function eulerMethod(){
    enterA();

    console.log('enterA executed successfully with value ' + a);

    enterB();

    console.log('enterB executed successfully with value ' + b);

    enterC();

    console.log('enterC executed successfully with value ' + c);

    console.log("Your equation is: " + a + "x^2 + " + b + "x + " + c + " = 0");

    formulaLine();

}


function enterA(){
    const inputA = readlineSync.question('\nPlease enter a number for a: (format ax^2 + bx + c = 0)  : ');
    a = parseFloat(inputA);
}
function enterB(){
    const inputB = readlineSync.question('\nPlease enter a number for b: (format ax^2 + bx + c = 0)  : ');
    b = parseFloat(inputB);
}
function enterC(){
    const inputC = readlineSync.question('\nPlease enter a number for c: (format ax^2 + bx + c = 0)  : ');
    c = parseFloat(inputC);
}

function formulaLine(){
    // Ask user what they want to do with the function submitted
    const whatDoYouWant = readlineSync.question('What would you like? Instantaneous derivative at some x->(1)  : ');
    if (whatDoYouWant == 1){
        instantaneousDerivative();
    }
    else {
        console.log("\nThat is not a valid option. Please try again.");
        formulaLine();
    }
}
function instantaneousDerivative(){
    // Get value of x to find instantaneous derivative at
    const inputX = readlineSync.question('\nPlease enter the value of x at which you want the instantaneous derivative of the function  : ');
    let x = parseFloat(inputX);
    if (x === NaN){
        console.log("Sorry, that is not a valid number. Please try again.");
        instantaneousDerivative();
    }
    else {
        // Find first coordinate pair
        let y1 = a*Math.pow(x, 2) + b*x + c;
        // Find second coordinate pair
        let x2 = parseFloat((x-0.0001));
        let y2 = a*Math.pow(x2,2) + b*x2 + c;
        // Calculation
        let instantDerivativeValue = parseFloat((y2 - y1) / (x2 - x))
        // Output
        console.log('The instantaneous derivative at x = ' + x + ' is approximately: ' + instantDerivativeValue);
    }
}

eulerMethod();

/* code for finding zeroes of a fuction
let answerA = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a)
let answerB = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a)
*/