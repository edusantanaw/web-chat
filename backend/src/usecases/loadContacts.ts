import { unauthorized } from "../helpers/http-response";
import { IContactRepository } from "../protocols/repository/contacts";
import { IUserRepository } from "../protocols/repository/user";

interface Dependeces {
    contactsRepository: IContactRepository
    userRepository: IUserRepository
}

export function loadContactsUsecase({contactsRepository, userRepository}: Dependeces){
    return async (userId: string) => {
        const verifyUserExists = await userRepository.findById(userId)
        if(verifyUserExists) throw unauthorized("User not exists!")
        const contacts = await contactsRepository.findContacts(userId)
        return contacts
    }
}