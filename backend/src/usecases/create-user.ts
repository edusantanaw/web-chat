import { IEncrypter } from "../protocols/helpers/encrypter";
import { ITokenGeneratory } from "../protocols/helpers/tokenGenerator";
import { IUserRepository } from "../protocols/repository/user";
import { data } from "../protocols/utils/create-user";


type ICreateUserUsecaseDependeces = {
    userRepository: IUserRepository
    encrypter: IEncrypter
    tokenGenerator: ITokenGeneratory
}

export default function createUserUsecase({userRepository, encrypter, tokenGenerator}: ICreateUserUsecaseDependeces){
    return async (data: data) => {
        const verifyUsername = await userRepository.findByUsername(data.username)
        if(verifyUsername) throw "Username já existe!"
        const hashedPassword = await encrypter.genHah(data.password)
        const user = await userRepository.create({username: data.username, password: hashedPassword })
        const accessToken =  tokenGenerator(user.id)
        return {user, accessToken}
    }
}