const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('User connected!')

    socket.on('message', data => {
        setTimeout(() => {
            socket.emit('saveMessage', data)
        }, 500)
    })

})

module.exports = {
  app,
  server
}
