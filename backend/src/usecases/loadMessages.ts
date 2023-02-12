import { message } from "../entities/messages"

type IMessagesRepository  = {
    newMessage: (data: message) => Promise<message>
    loadMessagesByRoom: (room: string) => Promise<message[] | null>
}

export function loadMessagesUsecase(messageRepository: IMessagesRepository){
    return async (room: string) => {
        const messages = await messageRepository.loadMessagesByRoom(room)
        return messages
    }
}