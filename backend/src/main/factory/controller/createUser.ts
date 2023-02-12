import createUserController from "../../../controllers/create-user";
import { makeCreateUserUsecase } from "../usecase/createUser";


export function makeCreateUserController(){
    const createUserUsecase = makeCreateUserUsecase()
    return createUserController({createUserUsecase})
}