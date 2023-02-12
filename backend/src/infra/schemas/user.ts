import { Schema } from 'mongoose'
import mongoose from 'mongoose'


const modelName = 'user'

const User = mongoose.model(
    modelName,
    new Schema({
        username: {
            required: true,
            type: String,
            unique: true
        },
        password: {
            required: true,
            type: String
        },
        perfilPhoto: {
            type: String
        },
        bio: {
            type: String
        }
    })
)

export { User }