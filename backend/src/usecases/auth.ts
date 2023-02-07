import { IUser } from "../entities/user"

interface IUserRepository {
    findByUsername: (username: string) => Promise<IUser | null>
}

interface IEncrypter {
    genHah: (password: string) => Promise<string>
    compare: (password: string, hashedPassword: string) => Promise<boolean>
}

type ITokenGeneratory = (userId: string) => string;

type IAuthUsecaseDependecess = {
    userRepository: IUserRepository
    encrypter: IEncrypter
    tokenGenerator: ITokenGeneratory
}

export default function authUsecase({userRepository, encrypter, tokenGenerator}: IAuthUsecaseDependecess){
    return async(username: string, password: string) => {
        const user = await userRepository.findByUsername(username)
        if(!user)  throw "Usuario não existe!"
        const validPassword = await encrypter.compare(password, user.password)
        if(!validPassword) throw "Senha invalida!"
        const accessToken = tokenGenerator(user.id)
        return {accessToken, user}
    }
}