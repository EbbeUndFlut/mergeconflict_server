
import { getDb } from '../utils/db.js'

export const createPost = async (req, res) => {
    const post = req.body

    const db = await getDb()
    await db.collection('posts').insertOne(post)
    res.json({ message: 'ok' })
}