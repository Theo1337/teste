const port = process.env.PORT || 3000;
var express= require('express');
const app = new express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
process.env.PWD = process.cwd()

app.use(express.static(process.env.PWD + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html');
});

http.listen(port, () => {
  console.log(``);
});

io.on('connection', function(socket) {
    socket.on('event', function(data) {
        io.emit('event', data);
        console.log('event', data);
    });
});
io.on('connection', function(socket) {
    socket.on('eventJ', function(data) {
        io.emit('eventJ', data);
        console.log('eventJ', data);
    });
});
io.on('connection', function(socket) {
    socket.on('eventK', function(data) {
        io.emit('eventK', data);
        console.log('eventK', data);
    });
});
io.on('connection', function(socket) {
    socket.on('vida', function(data) {
        console.log('vida', data);
    });
});
io.on('connection', function(socket) {
    socket.on('sanidade', function(data) {
        console.log('sanidade', data);
    });
});
io.on('connection', function(socket) {
    socket.on('magia', function(data) {
        console.log('magia', data);
    });
});
io.on('connection', function(socket) {
    socket.on('peso', function(data) {
        console.log('peso', data);
    });
});
io.sockets.on('connection', function(socket)
 {
socket.on('upcanvas', function(data){
socket.broadcast.emit('get-data', data);
});
 });