import express from 'express'
import { createServer } from 'http'
import socket from 'socket.io'

const Port = 3000

const app = express()
const server = createServer(app)
const io = new socket.Server(server, {
    cors: {
        origin: "*",
        methods: "*"
    }
})

io.on("connect", (socket) => {
    console.log(socket.id)
    const id = socket.id
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${id}`)
    })
    socket.on("ola", (data)=> {
        console.log(data)
    })
})

app.listen(Port, () => console.log(`Server running at ${Port}`))
