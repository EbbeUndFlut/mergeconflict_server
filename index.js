import express from 'express'
import './config.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { createPost } from './controller/BlogController.js'
import { login } from './controller/authcontroller.js'
import { encrypt } from './middleware/encrypt.js'
import { checkToken } from './middleware/authmiddleware.js'


const app = express()
app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.post('/api/posts',checkToken, createPost)
app.post('/api/login', encrypt, login)

app.listen(9898)

//bob secret