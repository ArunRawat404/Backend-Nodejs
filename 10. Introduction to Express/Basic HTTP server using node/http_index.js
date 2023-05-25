const http = require('http');

const PORT = 3000;

// Using createServer function we can actually create a basic http server using http module. This function return a server object, ant takes a callback as an argument.
// This function created a server but didn't start the server
// this callback is kind a listener function that is going to collect every http request that we will make to our server 
const server = http.createServer(function listener(request, response) {
    /**
    request and response both are objects
    using request argument we will be able to see details of upcoming http request
    using response argument we will be able to configure response for incoming http request
    **/

    //console.log("Incoming Request Details :", request);
    //console.log("Outgoing Response Details:", response);

    if (request.url == '/home') {
        // if we make a request on /home this if block will be executed 

        console.log("Request Method", request.method);

        // If we want to send data in multiple chunks
        response.write("Hi \n");
        response.write("I am Arun \n");

        // for corresponding http request the response it will send can be configured by end
        // response.end only expect a string as argument. Whatever your response is, by default the browser will represent it as a certain set of HTML code.
        response.end("Welcome to home page");
    }
});

// this listen function wil start the server 
server.listen(PORT, function exec() {
    // once we successfully boot up the server on given port, this callback will be executed
    console.log(`Server is up and running on PORT: ${PORT}`);
});