// Plan: for each number, there should be only one corresponding number that adds to 2020,
// so, check every line below it for the number -> if found, return both numbers
const fs = require('fs');
// fs.readFileSync('path') reads the contents of the entire file. .split('\n') takes the input and splits it into an array of substrings. .map(x => parseInt(x)) 
// turns every string in that array into an int.
const lines = fs.readFileSync('day1-input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

// Check first number
for (let i = 0; i < lines.length; i++){
    //try combinations with next number
        for (let m = i+1; m < lines.length; m++){
            // try combinations with third number 
            for (let j = m + 1; j < lines.length; j++){
                if (lines[i]+lines[m]+lines[j] == 2020){
                    return (
                    console.log('The answer is ' + lines[i] + ', ' + lines[m] + ', and ' + lines[j]), console.log('Multiplied they are equal to ' + lines[i]*lines[m]*lines[j]));
                }
            }
        }
}