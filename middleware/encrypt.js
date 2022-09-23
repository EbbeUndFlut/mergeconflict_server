import { createHmac } from 'crypto'

export const encrypt = (req, res, next) => {
    const hmac = createHmac('sha256', req.body.pass)
    req.body.pass = hmac.digest('hex')
    next()
}