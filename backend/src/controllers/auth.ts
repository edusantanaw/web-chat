import { badRequest, exception, ok } from "../helpers/http-response";
import { exceptionError } from "../protocols/helpers/exception";
import { IAuth } from "../protocols/usecases/auth";

type data = {
    username: string;
    password: string;
}

export default function authController({ authUsecase }: IAuth) {
    return async ({ username, password }: data) => {
        try {
            if (!username) return badRequest("O nome de usuario é necessario!")
            if (!password) return badRequest("A senha é necessaria!")
            const { accessToken, user } = await authUsecase(username, password)
            return ok({ accessToken, user })
        } catch (error) {
            return exception(error as exceptionError)
        }
    }
}