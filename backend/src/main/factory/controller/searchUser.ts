import { searchUserController } from "../../../controllers/search-user";
import { UserRepository } from "../../../infra/repository/user";


export function makeSearchUserController(){
    const userRepository = new UserRepository()
    return searchUserController(userRepository)
}