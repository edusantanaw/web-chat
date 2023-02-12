import mongoose, { Schema } from "mongoose";

const modelName = "message"

const Message = mongoose.model(
    modelName,
    new Schema({
        sender: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        toRoom: {
            type: String,
            required: true
        }
    })
)

export { Message }