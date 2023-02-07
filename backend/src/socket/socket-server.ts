import { Server } from 'http'
import socket from 'socket.io'

export default (server: Server) => {
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


}