import express, {Express} from 'express'
import { createServer } from 'http'
import socketServer from '../socket/socket-server'
import routes from './config/routes'
import database from './../infra/db/mongo'
import cors from 'cors'

const origin = "*"

class Server {
    Port = 3000
    app: Express = express()
    middlewares(){
        this.app.use(cors({
            credentials: true,
            origin
        }))
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())        
    }

    async bootstrap(){
        const server = createServer(this.app)
        this.middlewares()
        socketServer(server)
        routes(this.app)
        // await database()
        this.start()
    }

    start(){
            const port = this.Port
            const cb = () => console.log(`Server runnin at ${port}`)
            this.app.listen(port, cb)
    }
}
const server = new Server()
server.bootstrap()