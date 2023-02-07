import { Encrypter } from "../../../helpers/encrypter";
import { UserRepository } from "../../../infra/repository/user";
import authUsecase from "../../../usecases/auth";

export default function makeAuthUsecase(){

    const userRepository = new UserRepository()
    const encrypter = new Encrypter()
    return authUsecase({
        userRepository,
        encrypter,
        
    })
}