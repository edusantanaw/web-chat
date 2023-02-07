import { IUser } from "../../entities/user";

export interface IAuth {
    authUsecase: (username: string, password: string) => Promise<{ accessToken: string, user: IUser }>
}