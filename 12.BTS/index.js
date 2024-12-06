// Blocking Code
// console.log('Start');
// alert("Block")
// console.log('End');



// non Blocking code


// console.log("start");
// setTimeout(() => {
//     alert("Non Blocking")
// }, 1000)
// console.log('End');


// without CallBack

import fs from 'fs'

// console.log("Start");

// let data = fs.readFileSync('text.txt')
// console.log(data.toString());

// console.log('End');


// with CallBack


console.log("Start");

fs.readFile('text.txt', (err, res) => {
    err ? console.log(err) : console.log(res.toString());


})

console.log('End');