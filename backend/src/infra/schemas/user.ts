import { Schema } from 'mongoose'
import mongoose from '../db/mongo'

const User = mongoose.model(
    "user", 
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

export  {User}