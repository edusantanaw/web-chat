import { badRequest } from "../helpers/http-response"
import { IUserRepository } from "../protocols/repository/user"


interface Dependeces  {
    userRepository: IUserRepository
}
export function addNewContactUsecase({userRepository}: Dependeces){
    return async(userId: string, contactId: string) => {
        const userExists = await userRepository.findById(userId)
        if(!userExists) throw badRequest("Usuario não encontrado!")
        const contactExists = await userRepository.findById(contactId)
        if(!contactExists) throw badRequest("contato não encontrado!")
    }
}