const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);

    if (page === '/') {
        writeInformation('/');
    } else if (page === '/monsters') {
        writeInformation('/monsters');
    } else if (page === '/spells') {
        writeInformation('/spells');
    } else {
        console.log("Do this later.");
    }
})

const writeInformation = (pathname) => {
    let param = pathname.slice(1);
    if (pathname === '/') { param = 'index'; }
    fs.readFile(`${param}.html`, 'wtf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/json; charset=utf8'});
        res.write(data);
        res.end();
    })
}

server.listen(8000);