import express from 'express'
import './config.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import morgan from 'morgan'
import { createPost } from './controller/BlogController.js'
import { login } from './controller/authcontroller.js'
import { encrypt } from './middleware/encrypt.js'
import { checkToken, validateToken } from './middleware/authmiddleware.js'
import { getAllAssets, saveAsset } from './controller/assetsController.js'

const upload = multer({ dest: './uploads/' })

const app = express()
const PORT = process.env.PORT
app.use(morgan('dev'))
app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())

app.post('/api/posts', checkToken, upload.single('avatar'), createPost)
app.post('/api/login', encrypt, login)
app.post('/api/validate', validateToken)
app.post('/api/assets', checkToken, saveAsset)
app.get('/api/assets', getAllAssets)

app.listen(PORT, () => console.log('I am listen on', PORT))

//bob secret