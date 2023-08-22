// Plan: for each number, there should be only one corresponding number that adds to 2020,
// so, 2020-numberAtLine -> check every line below it for the number
// if found, return first number

var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('day1-input.txt');

lr.on('error', function (err) {
    // 'err' contains error obbject
});

lr.on('line', function (line) {
    // pause emitting of lines...
    lr.pause;

    // ...do your asynchronous line processing...
    setTimeout(function () {

        // ...and continue emitting lines.
        lr.resume();
    }, 100);
});

lr.on('end', function () {
    // All lines are read, file is closed now.
})
    
