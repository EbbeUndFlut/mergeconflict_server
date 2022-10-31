import nodemon from "nodemon"
import { getDb } from "../utils/db.js"
import { createAccessToken, createRefreshToken } from "../utils/token.js"

const cookieConfig = {
    httpOnly: true,
    sameSite: none,
    // secure: true
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
                    res.status(401).json({ message: 'Login failed', state: false })
                } else {
                    // res.cookie('rftoken', createRefreshToken(result[0]), {...cookieConfig,path:'/api/refresh'})
                    res.cookie('actoken', createAccessToken(result[0]), cookieConfig)
                    res.status(200).json({ message: 'Login sucessfully', state: true })
                }

            })

        })
}