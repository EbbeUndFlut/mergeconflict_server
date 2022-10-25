import { getDb } from "../utils/db.js"

export const searchCount = async (req, res) => {
    const db = await getDb()
    const result = await db.collection('searches').count()
    console.log(result)
    res.status(200).json({ searches: result })
}