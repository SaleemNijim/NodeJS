import http from 'http'

import fs from 'fs'

const server = http.createServer((res, req) => {
    if (req.url === '/') {
        res.writeHead(200, 'ok', { "Content-Type": 'text/html' })
        fs.readFile("./public/home.html", (error, data) => {
            if (error) throw error;
            res.send(data);
        })

    } else if (req.url === '/about') {
        res.writeHead(200, 'ok', { "Content-Type": 'text/html' })
        fs.readFile("./public/about.html", (error, data) => {
            if (error) throw error;
            res.send(data);
        })
    } else {
        res.writeHead(404, 'bad', { "Content-Type": 'text/html' })
        res.end("<h3>404 PAge Not Found :(</h3>")
    }
})

server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
