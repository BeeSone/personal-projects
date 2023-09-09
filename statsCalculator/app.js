const readLineSync = require('readline-sync')
const myArray = [];


function calculateStats(){
    createSet();
    // create variable sortedArray to store order (low to high) array
    const sortedArray = myArray.sort(function (a, b) { return a-b});
    console.log("your final list is: " + sortedArray);

    let meanFunc = ((myArray) => {
        let sigmaValues = 0;
        for (let i = 0; i < myArray.length; i++){
        sigmaValues += myArray[i];
        }
        return sigmaValues / myArray.length;
    });
    // print mean
    console.log("the mean is: " + meanFunc(myArray));

    // calculate median from sorted array input
    let medianFunc = (thisArray) => {
        if (thisArray.length % 2 == 0){
            let arrayLower = myArray[(thisArray.length / 2) - 1];
            let arrayHigher = myArray[(thisArray.length / 2 )];
            return (arrayHigher + arrayLower) / 2;
        }
        else {
            return thisArray[Math.floor(thisArray.length / 2)];
        }
    }
    // print median
    console.log("the median is: " + medianFunc(sortedArray))

    // use a hash function to return the most often seen word
    countingObject = {}
    let modeFunc = (thisArray) => {
        thisArray.forEach(function(e) {
            if (countingObject[e] === undefined){
                countingObject[e] = 0;
            }
            countingObject[e]++;
        })
        let arr = Object.keys(countingObject).map(function(key){ return countingObject[key];});
        let maximum = Math.max.apply(null, arr);
        
    }
}

function createSet(){
    let currentNum = readLineSync.question("\n Enter your number (to stop, write \"stop\", to delete the last number, write \"delete last\"): ");
    if (currentNum == "stop"){
        return;
    }
    else if (currentNum == "delete last"){
        myArray.pop();
        console.log("current list: " + myArray);
        createSet();
    }
    else {
        myArray.push(parseInt(currentNum));
        console.log("current list: " + myArray);
        createSet();
    }
}
calculateStats();

// SD equation: sqrt(sum of deviations from the mean^2 divided by )