import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const modelName = 'contacts'

const Contacts = mongoose.model(
    modelName,
    new Schema({
        userId: {
            types: Schema.Types.ObjectId,
            ref: "user._id",
            required: true
        },
        contactId: {
            types: Schema.Types.ObjectId,
            ref: "user._id",
            required: true
        },
        room: {
            type: String,
            required: true
        }
    })
)

export { Contacts }