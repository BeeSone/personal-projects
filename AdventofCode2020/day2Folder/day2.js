const fs = require('fs');
// fs.readFileSync('path') reads the contents of the entire file. .split('\n') takes the input and splits it into an array of substrings. .map(x => parseInt(x)) 
// turns every string in that array into an int.
const lines = fs.readFileSync('day1-input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

let validPasswords = 0;

// plan:
// parse each line into several parts of an array, in the format:
// [numberA, numberB, "askedForLetter", "possiblePassword"]
// (may need to do special things to numberA and numberB to accept numbers with multiple characters)
// Then, run a regex .test greedy test function using "askedForLetter" on "possiblePassword" greed defined by values of numberA and numberB






// 8/24/2023 This got really confusing, so I'm opting to work on freeCodeCamp until I can understand what each thing means vvv
/*
lines.forEach(line => /^(\d+) - (\d+) (.):$/{

})
*/