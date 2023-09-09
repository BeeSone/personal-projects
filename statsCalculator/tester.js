countingObject = {
    1:1,
    2:2,
    6:7,
    7:3,
    4:7,
    9:3
}
console.log(Object.entries(countingObject));
let arrValues = Object.keys(countingObject).map(function(key){ return countingObject[key];});
console.log(Object.keys(countingObject));
console.log(arrValues);
// let arrValues = Object.Values(countingObject).map(function(value){ return countingObject[value]});

// let maximum = Math.max.apply(null, arrKeys);
// for (let i = 0; i < arrKeys.length; i++){
//     if (arrKeys[i] == maximum){
//         console.log(countingObject[i]);
//     }
// }
console.log(Object.keys(countingObject));
const arrValues = Object.values(countingObject);
// console.log(arrValues);
let maximum = Math.max.apply(null, arrValues); /* returns 7 */
let arrayOfMaxKeys = [];
for (let keys in countingObject){
    console.log(keys)
    console.log(countingObject[keys])
    if (countingObject[keys] == maximum){
        arrayOfMaxKeys.push(keys);
    }
}
console.log(arrayOfMaxKeys);


// console.log(maximum);
// console.log(arrKeys);
// console.log(arrValues);


// Object.values(obj) returns values as they appear!!!