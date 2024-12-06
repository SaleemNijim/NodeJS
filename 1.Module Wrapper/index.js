// Module Wrapper
//  ==> a Module Wrapper is a function that wraps each module’s code to isolate its scope, preventing variable conflicts. It provides the exports, require, module, __filename, and __dirname objects to manage module behavior and dependencies.

(function (exports , require , module , __filename , __dirname){
    //<code>
    console.log('hello from IIfE');
    
})()

// console.log('hello node js');

console.log(__filename);
console.log(__dirname);
console.log(module);
