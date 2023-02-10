import { ContactsRepository } from "../../../infra/repository/contacts";
import { loadRoomUsecase } from "../../../usecases/loadRoom";


export function makeLoadRoomUsecase(){
    const contactsReposository = new ContactsRepository()
    return loadRoomUsecase({contactsReposository})
}