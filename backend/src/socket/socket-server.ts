import { Server } from 'http'
import socket from 'socket.io'
import { MessageRepository } from '../infra/repository/message'
import { makeLoadRoomUsecase } from '../main/factory/usecase/loadRoom'

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

        socket.on("join_room", async(data)=> {
            const loadRoomUsecase = makeLoadRoomUsecase()
                const room = await loadRoomUsecase(data)
                if(room){
                    socket.join(room)
                }
        })

        socket.on("send_message", async (data)=> {
            const messageRepository = new MessageRepository()
            const message = await messageRepository.newMessage(data)
            socket.to(message.toRoom).emit("receive_message",message)
        })
    })
}