import { createReadStream } from 'fs'


// const stream = createReadStream("./data.txt", { highWaterMark: 900000 })

const stream = createReadStream("./data.txt", { encoding: 'utf8' })

stream.on('data', (data) => {
    console.log(data);

})