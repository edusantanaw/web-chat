import mongoose, { Schema } from "mongoose";

const modelName =  "message"

const Message = mongoose.model(
    modelName,
    new Schema({
        sender: {
            types: Schema.Types.ObjectId,
            ref: "user._id",
            required: true
        },
        message: {
            type: String,
            required: true
        },
        toRoom: {
            type: Schema.Types.String,
            ref: "contacts.room",
            required: true
        }
    })
)

export {Message}