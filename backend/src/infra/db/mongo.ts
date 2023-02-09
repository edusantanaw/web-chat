import mongoose from 'mongoose'

const connectionString = "mongodb://localhost/webchat"

function db() {
    try {
        const db = mongoose.connect(connectionString)
        return db
    } catch (error) {
        console.log(error)
    }
}

export default db