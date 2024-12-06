import EventEmitter from "events";

// Creating Instancs

const customEmitter = new EventEmitter()


// 1.on: listen/register for an event
// 2.once: listen/register for an event for one time
// 3.emit: emit/call an event



// customEmitter.on('response', (name, id) => {
//     console.log(`user:${name} id:${id}`)

// })

customEmitter.once('response', (name, id) => {
    console.log(`user:${name} id:${id}`)

}) //output :user:john id:17 cuz it just run once

customEmitter.emit('response', 'john', 17)
customEmitter.emit('response', 'saleem', 27)
customEmitter.emit('response', 'ahmad', 20)
