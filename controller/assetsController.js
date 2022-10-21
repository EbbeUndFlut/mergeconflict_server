import { getDb } from "../utils/db.js"

export const saveAsset = async (req, res) => {
    console.log('hort hort', req.body);
    const asset = {
        name: req.body.name,
        file: req.body.file
    }
    const db = await getDb()
    const result = await db.collection('assets').insertOne(asset)
    console.log(result);
    res.status(200).json({ status: 0, data: { message: "its in" } })
}

export const getAllAssets = async (req, res) => {
    const db = await getDb()
    const result = await db.collection('assets').find().toArray()
    res.status(200).json(result)
}