import { badRequest } from "../helpers/http-response"
import { IContactRepository } from "../protocols/repository/contacts"
import { IUserRepository } from "../protocols/repository/user"


interface Dependeces  {
    userRepository: IUserRepository
    contactRepository: IContactRepository
}


export function addNewContactUsecase({userRepository, contactRepository}: Dependeces){
    return async(userId: string, contactId: string) => {
        const userExists = await userRepository.findById(userId)
        if(!userExists) throw badRequest("Usuario não encontrado!")
        const contactExists = await userRepository.findById(contactId)
        if(!contactExists) throw badRequest("contato não encontrado!")
        const verifyRoomExists = await contactRepository.findById(userId, contactId)
        await contactRepository.create(
            userId,
            contactId,
            verifyRoomExists ? verifyRoomExists.room : undefined
        ) 
    }
}