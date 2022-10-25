import { ObjectId } from "mongodb"
import { getDb } from "../utils/db.js"

export const getAllCategories = async (req, res) => {
    const db = await getDb()
    const result = await db.collection('categories').find().toArray()
    res.status(200).json(result)
}

export const addCategory = async (req, res) => {
    const db = await getDb()
    const result = db.collection('categories').insertOne(req.body)

    res.status(200).json({ message: 'OK' })
}

export const deleteCategory = async (req, res) => {
    const db = await getDb()
    const result = db.collection('categories').deleteOne({ _id: new ObjectId(req.body.id) })
    console.log(result);
    res.status(200).json({ message: 'OK' })
}