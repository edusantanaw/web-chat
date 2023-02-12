import { loadContactsController } from "../../../controllers/loadContacts";
import { makeLoadContactsUsecase } from "../usecase/loadContacts";

export function makeLoadContactsController(){
    const loadContactsUsecase = makeLoadContactsUsecase()
    return loadContactsController({loadContactsUsecase})
}