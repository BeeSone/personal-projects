// NOTE: return in a parent function ends the execution of the function immediately.

// checking if this return statement can work
    // const a = 3;
    // const b = 5;
    // function ab5(){
    //     if (a + b == 8){
    //         return (
    //             console.log('yes'), console.log('also no'));
    //     }
    // } 

    // const arrayOfNumbers = [1, 2, 3, 4]
    // function testFunc(){
    //     for (i = 0; i < arrayOfNumbers.length; i++){
    //         for (n = i + 1; n <= arrayOfNumbers.length; n++){
    //             if (parseInt(arrayOfNumbers[i]) + parseInt(arrayOfNumbers[n]) == 7){
    //                 return (
    //                     console.log(arrayOfNumbers[i] + ' ' + arrayOfNumbers[n]));
    //             }
    //         } 
    //     }
    // }
    // ab5();
    // testFunc();
var i = 3; 
var p = 0; 
// initializes function that takes an argument and adds two to it
function adder(x) { 
    console.log(x);
    x = x + 2; };
// adds two to i to create p and then refers to value of i to increment
adder(++i); 
console.log(i, p);
