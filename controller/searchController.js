import { getDb } from "../utils/db.js"

export const searchCommand = async (req, res) => {
    console.log(req.query);
    const command = req.query.q.toLowerCase()
    await tracker(command)
    const db = await getDb()
    const result = await db.collection('posts').findOne({ title: command })
    res.status(200).json(result)



}


const tracker = async (search) => {
    const obj = {
        query: search,
        date: Date.now()
    }
    const db = await getDb()
    const result = await db.collection('searches').insertOne(obj)
    return result

}