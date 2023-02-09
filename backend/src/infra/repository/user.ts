import { IUserRepository } from '../../protocols/repository/user';
import { User } from '../schemas/user'
import {IUser} from '../../entities/user'

export class UserRepository implements IUserRepository {
    async create(data: { username: string; password: string; }): Promise<IUser> {
        const newUser =  new User(data)
        const user  = await newUser.save()
        return user as any as IUser
    };

    async findByUsername(username: string): Promise<IUser | null> {
        const user = await User.findOne({username: username})
        if(!user) return null
        return user as any as IUser
    };

    async searchByUsername(username: string): Promise<IUser[] | null>{
        const users = await User.find({
            username: { $regex: '.*' + username + '.*' }
        })
        if(users.length === 0) return null
        return users as any as IUser[] 
    }
}