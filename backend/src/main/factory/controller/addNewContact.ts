import { addNewContact } from "../../../controllers/addNewContact";
import { makeAddNewContactUsecase } from "../usecase/addNewContact";


export function makeAddNewContactController(){

    const addNewContactUsecase = makeAddNewContactUsecase()
    return addNewContact({addNewContactUsecase})
}