import express from 'express'
import {createServer} from 'http'
import socket from './socket/socket-server'

const app = express()

const Port = 3000
const server = createServer(app)
socket(server)

app.listen(Port, ()=> console.log(`Server running at ${Port}`))
