import http from 'http'


// Create our server
const server = http.createServer((req, res) => {
    console.log(req);
    res.write("<h1>Hello from saleem</h1>")
    res.setHeader("Content-type", 'text/html')
})

// listening om port 8000 
server.listen(8000, () => console.log('server up'))
