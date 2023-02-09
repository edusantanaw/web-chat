import express, {Express} from 'express'
import { createServer } from 'http'
import socketServer from '../socket/socket-server'
import routes from './config/routes'
import database from '../infra/db/mongo'
import cors from 'cors'

const origin = "*"

class Server {
    private Port = 3000
    private app: Express = express()

    private middlewares(){
        this.app.use(cors({
            credentials: true,
            origin
        }))
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())        
    }

   public async bootstrap(){
        this.middlewares()
        const server = createServer(this.app)
        socketServer(server)
        routes(this.app)
        await database()
        this.start()
    }

    private start(){
            const port = this.Port
            const cb = () => console.log(`Server running at ${port}`)
            this.app.listen(port, cb)
    }
}
const server = new Server()
server.bootstrap()