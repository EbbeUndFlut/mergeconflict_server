import { verifyAccessToken } from "../utils/token.js"

export const checkToken = (req, res, next) => {
    const token = req.cookies
    console.log(token);
    const result = verifyAccessToken(token.actoken)
    console.log(result)
    next()

}

export const validateToken = (req, res) => {
    const result = verifyAccessToken(req.cookies.actoken)
    console.log(result)
    res.json({state:true})
}