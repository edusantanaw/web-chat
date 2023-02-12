import { ContactsRepository } from "../../../infra/repository/contacts";
import { UserRepository } from "../../../infra/repository/user";
import { loadContactsUsecase } from "../../../usecases/loadContacts";


export function makeLoadContactsUsecase(){
    const contactsRepository = new ContactsRepository()
    const userRepository = new UserRepository()
    return loadContactsUsecase({
        contactsRepository,
        userRepository
    })
}