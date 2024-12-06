import http from 'http'

const server = http.createServer((res, req) => {
    if (req.url === '/') {

        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/about') {
        res.end("<h2>About section </h2>")
    } else if (req.url === '/content') {
        res.end("<h2>content section </h2>")
    } else {
        res.end("<h1>404 page not found</h1>")
    }

})

server.listen(8000, () => console.log('Server is running on port 8000'));
