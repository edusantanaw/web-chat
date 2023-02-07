import jwt from 'jsonwebtoken'

const secret = "secret"
export function tokenGenerator(userId: string) {
    const token = jwt.sign(userId, secret)
    return token
}