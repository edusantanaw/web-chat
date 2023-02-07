import { IEncrypter } from "../protocols/helpers/encrypter";
import { ITokenGeneratory } from "../protocols/helpers/tokenGenerator";
import { IUserRepository } from "../protocols/repository/user";

type IAuthUsecaseDependeces = {
    userRepository: IUserRepository
    encrypter: IEncrypter
    tokenGenerator: ITokenGeneratory
}

export default function authUsecase({ userRepository, encrypter, tokenGenerator }: IAuthUsecaseDependeces) {
    return async (username: string, password: string) => {
        const user = await userRepository.findByUsername(username)
        if (!user) throw "Usuario não existe!"
        const validPassword = await encrypter.compare(password, user.password)
        if (!validPassword) throw "Senha invalida!"
        const accessToken = tokenGenerator(user._id)
        return { accessToken, user }
    }
}