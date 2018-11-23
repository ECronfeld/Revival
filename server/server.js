const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

//Betyder følgende: Brug hvad end der er i enviroment variable port, og hvis der ikke er noget brug port 3000
//Så vi kan smække den op på heroku
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Server started on port 3000');
});