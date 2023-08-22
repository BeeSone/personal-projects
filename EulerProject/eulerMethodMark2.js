// Improvement goals: cut all readline functions and replace with one all-purpose function
const readlineSync = require('readline-sync');

// var a, b, c globally defined with no value, type defined with parseFloat statements
var a;
var b;
var c;
var letterArray = ['a', 'b', 'c']

function eulerMethod(){

    // Assign value for a, b, and c
    enterVariables();

    // State equation
    console.log("Your equation is: " + a + "x^2 + " + b + "x + " + c + " = y");

    // Ask user what they want to do with the equation and do that
    formulaLine();
}

function enterVariables(){
    // Simple for loop to let the user assign values for a, b, and c
    for (let i = 0; i < 3; i++)  {
        const variableInput = readlineSync.question('\nPlease enter a number for ' + letterArray[i] + ': (format ax^2 + bx + c = y)  : ');
        if (letterArray[i] === 'a'){
            a = parseFloat(variableInput);
        }
        else if (letterArray[i] === 'b'){
            b = parseFloat(variableInput);
        }
        else if (letterArray[i] === 'c'){
            c = parseFloat(variableInput);
        }
    }
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
        console.log('The instantaneous derivative at x = ' + x + ' is approximately: ' + Math.round(100*instantDerivativeValue)/100);
    }
}

eulerMethod();

/* code for finding zeroes of a fuction
let answerA = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a)
let answerB = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a)
*/