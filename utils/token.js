import jwt from 'jsonwebtoken'

export const createAccessToken = (user) => {
    const token = jwt.sign({ user: user._id }, process.env.SECRET_ACCESS, { expiresIn: '1h' })
    return token
}

export const createRefreshToken = (user) => {
    const token = jwt.sign({ user: user._id }, process.env.SECRET_REFRESH, { expiresIn: '1h' })
    return token
}

export const verifyRefreshToken = (token) => {
    const decoded = jwt.verify(token, process.env.SECRET_REFRESH)
    return decoded
}

export const verifyAccessToken = (token) => {
    const decoded = jwt.verify(token, process.env.SECRET_ACCESS)
    return decoded
}

