import { badRequest, server, success } from "../helpers/http-response";

type data = {
    username: string;
    password: string;
}

type IUser = {
    id: string
    username: string;
    password: string;
}

interface IAuth {
    authUsecase: (username: string, password: string) => Promise<{ accessToken: string, user: IUser }>
}

export default function authController({ authUsecase }: IAuth) {
    return async ({ username, password }: data) => {
        try {
            if (!username) return badRequest("O nome de usuario é necessario!")
            if (!password) return badRequest("A senha é necessaria!")
            const { accessToken, user } = await authUsecase(username, password)
            return success({ accessToken, user })
        } catch (error) {
            return server(error)
        }
    }
}