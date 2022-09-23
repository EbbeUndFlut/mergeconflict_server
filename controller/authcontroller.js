import { getDb } from "../utils/db.js"
import { createAccessToken, createRefreshToken } from "../utils/token.js"

const cookieConfig = {
    httpOnly: true,
    secure: true
}

export const login = (req, res) => {
    const user = {
        username: req.body.username,
        pass: req.body.pass
    }
    getDb()
        .then((db) => {
            const collection = db.collection('user')
            collection.find(user).toArray().then(result => {
                if (result.length === 0) {
                    res.status(401).json({ message: 'Login failed' })
                }
                res.cookie('rftoken', createRefreshToken(user), cookieConfig)
                res.cookie('actoken', createAccessToken(user), cookieConfig)
                res.status(200).json({ message: 'Login sucessfully' })
            })

        })
}