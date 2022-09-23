import { verifyAccessToken } from "../utils/token.js"

export const checkToken = (req, res, next) => {
    const token = req.cookies
    console.log(token);
    const result = verifyAccessToken(token.actoken)
    console.log(result)
    next()

}