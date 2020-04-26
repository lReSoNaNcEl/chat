const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server);
const users = require('./users')()

const message = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

    socket.on('joinUser', (data, callback) => {
        callback({id: socket.id})
        socket.join(data.room)

        users.remove(socket.id)
        users.add({
            id: socket.id,
            name: data.name,
            room: data.room
        })

        socket.emit('addMessage', message('Admin', `Добро пожаловать в комнату, ${data.name}`))

        socket.broadcast
            .to(data.room)
            .emit('addMessage', message('Admin', `Пользователь ${data.name} зашел в комнату`))
    })

    socket.on('message', (data, callback) => {
        const user = users.get(data.id)
        io.to(user.room).emit('addMessage', message(data.name, data.text, data.id))
        callback({loaded: true})
    })

})

module.exports = {
  app,
  server
}
