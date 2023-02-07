import { IUser } from "../entities/user";
import { badRequest, server, success } from "../helpers/http-response";

type data = {
    username: string;
    password: string;
    confirmPassword: string;
}

interface ICreateUserControllerDependeces {
    createUserUsecase: (data: data) => Promise<{ accessToken: string, user: IUser }>
}

export default function createUserController({ createUserUsecase }: ICreateUserControllerDependeces) {
    return async (data: data) => {
        const { username, password, confirmPassword } = data
        try {
            if (!username) return badRequest("O username é necessario!")
            if (!password) return badRequest("A senha é necessaria!")
            if (!confirmPassword) return badRequest("A confirmação de senha é necessaria!")
            if (password !== confirmPassword) return badRequest("As senhas não coecidem!")
            const { accessToken, user } = await createUserUsecase(data)
            return success({ accessToken, user })
        } catch (error) {
            return server(error)
        }
    }

}