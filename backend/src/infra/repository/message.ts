import { Message } from "../schemas/message"


type message = {
    sender: string,
    message: string,
    toRoom: string
}

export class MessageRepository {
    async newMessage(data: message){
        const newMessage =  new Message(data)
        await newMessage.save()
        return newMessage as any as message
    }

    async loadMessagesByRoom(room: string){
        const messages = await Message.find({toRoom: room})
        return messages
    }
}