const express = require('express');

const PORT = 3000;

// express is a function and by calling express function we are creating express server object
const app = express();

// configuring on what should happen for get request on '/home'
app.get('/home', (request, response) => {
    // response.send("Hi there,  this is a get request");
    response.json({
        message: "Ok"
    })
});

app.post('/home', (request, response) => {
    // response.send("Hi there, this is a post request");
    response.json({
        message: "Ok"
    })
});

app.listen(PORT, () => {
    console.log(`Server up and running on PORT: ${PORT}`);
});