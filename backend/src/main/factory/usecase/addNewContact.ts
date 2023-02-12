import { ContactsRepository } from "../../../infra/repository/contacts";
import { UserRepository } from "../../../infra/repository/user";
import { addNewContactUsecase } from "../../../usecases/addNewContact";


export function makeAddNewContactUsecase(){
    const userRepository = new UserRepository()
    const contactRepository = new ContactsRepository()
    return  addNewContactUsecase({
        contactRepository,
        userRepository
    })
}