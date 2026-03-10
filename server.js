const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;

    const writeInformation = () => {
        let param = page.slice(1);

        const filePathURL = (param === '') ? `${__dirname}/index.html` : `${__dirname}/pages/${param}.html`;
        
        fs.readFile(filePathURL, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Page not found');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            res.write(data);
            res.end();
        })
    }

    if (page === '/favicon.ico') {
        res.writeHead(204);
        res.end();  
    } else if (page === '/') {
        writeInformation();  
    } else if (page === '/monsters') {
        writeInformation();
    } else if (page === '/spells') {
        writeInformation();
    } else if (page === '/styles/styles.css') {
        fs.readFile(`${__dirname}/styles/styles.css`, 'utf8', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
        });
    } else if (page === '/scripts/scripts.js') {
        fs.readFile(`${__dirname}/scripts/scripts.js`, 'utf8', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
        });
    } else {
        console.log("Hmmm, something still isn't working...");
    }
})

server.listen(8000);