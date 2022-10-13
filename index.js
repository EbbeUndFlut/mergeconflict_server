import express from 'express'
import './config.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import { createPost } from './controller/BlogController.js'
import { login } from './controller/authcontroller.js'
import { encrypt } from './middleware/encrypt.js'
import { checkToken, validateToken } from './middleware/authmiddleware.js'

const upload = multer({dest:'./uploads/'})

const app = express()
const PORT = process.env.PORT
app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.post('/api/posts',checkToken, upload.single('avatar'), createPost)
app.post('/api/login', encrypt, login)
app.post('/api/validate',validateToken)

app.listen(PORT)

//bob secret