
import {getDb} from '../utils/db.js'

export const createPost = async (req, res) => {
    const post = {
        title:req.body.title,
        content: req.body.content,
        imgurl: req.file.filename,
        category: req.body.category
    }

    const db = await getDb()
    await db.collection('posts').insertOne(post)
    res.json({ message: 'ok' })
}