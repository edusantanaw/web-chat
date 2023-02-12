import { Encrypter } from "../../../helpers/encrypter";
import { UserRepository } from "../../../infra/repository/user";
import createUserUsecase from "../../../usecases/create-user";
import {tokenGenerator} from '../../../helpers/token'

export function makeCreateUserUsecase(){
    const userRepository = new UserRepository()
    const encrypter = new Encrypter()
    return createUserUsecase({
        encrypter,
        tokenGenerator,
        userRepository
    })
}