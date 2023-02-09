import { badRequest, exception, noContent, success } from "../helpers/http-response"
import { IUserRepository } from "../protocols/repository/user"


export function searchUserController(userRepository: IUserRepository) {
    return async ({ username }: { username: string }) => {
        try {
            if (!username) return badRequest("O username é necessario!")
            const users = await userRepository.findByUsername(username)
            if (!users) return noContent("username")
            return success(users)
        } catch (error) {
            return exception(error)
        }
    }
}