import 'dotenv/config'
import jwt from 'jsonwebtoken'

const generateAccessToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_TOKEN, { expiresIn: '1d'})
}

const generateRefreshToken = (_id) => {
    return jwt.sign({_id}, process.env.REFRESH_TOKEN)
}

export {generateAccessToken, generateRefreshToken}
