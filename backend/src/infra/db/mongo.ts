import mongoose from 'mongoose'

async function db() {
    const db = await mongoose.connect("mongodb://localhost/webchat")
    console.log("mongodb started")
    return db

}

const database = await db()

export default database