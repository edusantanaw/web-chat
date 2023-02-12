import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const modelName = 'contacts'

const Contacts = mongoose.model(
    modelName,
    new Schema({
        userId: {
           type: String,
            required: true
        },
        contactId: {
           type: String,
            required: true
        },
        room: {
            type: String,
            required: true
        }
    })
)

export { Contacts }