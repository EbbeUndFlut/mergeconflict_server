import { verifyAccessToken } from "../utils/token.js"

export const checkToken = (req, res, next) => {
    const token = req.cookies
    console.log(token);
    try {
        const result = verifyAccessToken(token.actoken)
        console.log(result)
        next()
    } catch (err) {
        res.status(401)
        res.json({ state: false })
    }


}

export const validateToken = (req, res) => {
    try {
        const result = verifyAccessToken(req.cookies.actoken)
        console.log(result)
        res.json({ state: true })
    } catch (err) {
        console.log(err)
        res.status(401)
        res.json({ state: false })
    }

}