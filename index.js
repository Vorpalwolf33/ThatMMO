// Importing dependencies
const express = require('express');
const configDB = require('./config/configDB');
const routes = require('./config/routes');
const cors = require('cors');

configDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);

io.on('connection', (socket) => {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', (data) => {
        console.log(data);
    })
})