
import { ObjectId } from 'mongodb'
import { getDb } from '../utils/db.js'

export const createPost = async (req, res) => {
    const post = req.body

    const db = await getDb()
    await db.collection('posts').insertOne(post)
    res.json({ message: 'ok' })
}

export const getAllPosts = async (_, res) => {
    const db = await getDb()
    const result = await db.collection('posts').find().toArray()
    res.status(200).json(result)
}

export const removePost = async (req, res) => {
    console.log('in delete', req.body.id);
    try {
        const id = req.body.id
        const db = await getDb()
        const result = await db.collection('posts').deleteOne({ _id: new ObjectId(id) })

        res.status(200).json({ state: true })
    } catch (error) {
        res.status(500).json({ state: false })
    }

}