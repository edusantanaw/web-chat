import { message } from "../../entities/messages"
import { Message } from "../schemas/message"




export class MessageRepository {
    async newMessage(data: message){
        const newMessage =  new Message(data)
        await newMessage.save()
        return newMessage as any as message
    }

    async loadMessagesByRoom(room: string){
        const messages = await Message.find({toRoom: room})
        if(messages.length === 0) return null
        return messages
    }
}