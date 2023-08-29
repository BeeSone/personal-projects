const fs = require('fs');
// fs.readFileSync('path') reads the contents of the entire file. .split('\n') takes the input and splits it into an array of substrings. .map(x => parseInt(x)) 
// turns every string in that array into an int.
const lines = fs.readFileSync('day1-input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

let validPasswords = 0;

// 8/24/2023 This got really confusing, so I'm opting to work on freeCodeCamp until I can understand what each thing means vvv
/*
lines.forEach(line => /^(\d+) - (\d+) (.):$/{

})
*/