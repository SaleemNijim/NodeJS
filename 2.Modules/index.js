//Modules
//Modules help in organizing code, reducing redundancy, and making it easier to maintain

//__________________________________

// this is allows us to use that function from that (index.js) file , and we can use it right here
//getting that function right here
const greet = require('./greet')
const {person1,person2,person3} = require('./peoples.js')


greet(person1)
greet(person2)
greet(person3)

