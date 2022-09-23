import express from 'express'
import './config.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { createPost } from './controller/BlogController.js'
import { login } from './controller/authcontroller.js'
import { encrypt } from './middleware/encrypt.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get('/api/posts', createPost)
app.post('/api/login', encrypt, login)

app.listen(9898)

//bob secret