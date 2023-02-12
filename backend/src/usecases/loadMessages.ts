import { message } from "../entities/messages"
import { badRequest } from "../helpers/http-response"

type IMessagesRepository  = {
    newMessage: (data: message) => Promise<message>
    loadMessagesByRoom: (room: string) => Promise<message[] | null>
}


type ILoadRoomUsecase = (room: string) => Promise<string>

export function loadMessagesUsecase(messageRepository: IMessagesRepository, loadRoomUsecase: ILoadRoomUsecase){
    return async (room: string) => {
        const verifyRoomExits = await loadRoomUsecase(room)
        if(!verifyRoomExits) throw badRequest("Sala não existe")
        const messages = await messageRepository.loadMessagesByRoom(room)
        return messages
    }
}