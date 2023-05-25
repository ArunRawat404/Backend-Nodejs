const http = require('http');
const fs = require('fs').promises;

const PORT = 3000;
let indexFile;

const server = http.createServer(function listen(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
});

// reading the index.html file 
fs.readFile(__dirname + '/index.html')
    .then(contents => {
        indexFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
        return;
    });


server.listen(PORT, function exec() {
    console.log(`Server is up and running on PORT ${PORT}`)
});