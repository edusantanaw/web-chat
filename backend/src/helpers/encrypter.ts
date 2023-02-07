import bcrypt from 'bcrypt'
import { IEncrypter } from '../protocols/helpers/encrypter'

export class Encrypter implements IEncrypter {
    rounds = 10

    async genHash(password: string) {
        const salt = await bcrypt.genSalt(this.rounds)
        const hashedPassword = bcrypt.hash(password, salt)
        return hashedPassword
    }

    async compare(password: string, hash:string ) {
        const isValid = await bcrypt.compare(password, hash)
        return isValid
    }
}