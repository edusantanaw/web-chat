import { IUser } from "../../entities/user";

export interface IUserRepository {
    findByUsername: (username: string) => Promise<IUser | null>
    create: (data: {username: string, password: string}) => Promise<IUser>
}