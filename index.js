import express from 'express'
import './config.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import morgan from 'morgan'
import { createPost, getAllPosts, removePost } from './controller/BlogController.js'
import { login } from './controller/authcontroller.js'
import { encrypt } from './middleware/encrypt.js'
import { checkToken, validateToken } from './middleware/authmiddleware.js'
import { getAllAssets, saveAsset } from './controller/assetsController.js'
import { getAllCategories, addCategory, deleteCategory } from './controller/categoryController.js'
import { searchCommand } from './controller/searchController.js'
import { searchCount } from './controller/statisticController.js'
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

app.post('/api/posts', checkToken, createPost)
app.get('/api/posts', checkToken, getAllPosts)
app.delete('/api/posts', checkToken, removePost)
app.post('/api/login', encrypt, login)
app.post('/api/validate', validateToken)
app.post('/api/assets', checkToken, saveAsset)
app.get('/api/assets', getAllAssets)
app.get('/api/categories', getAllCategories)
app.post('/api/categories', checkToken, addCategory)
app.delete('/api/categories', checkToken, deleteCategory)
app.get('/api/search', searchCommand)
app.get('/api/statistic/search', checkToken, searchCount)
app.listen(PORT, () => console.log('I am listen on', PORT))

//bob secret