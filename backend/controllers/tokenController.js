import jwt from "jsonwebtoken"
import 'dotenv/config'
import User from "../models/userModel.js"
import { generateAccessToken, generateRefreshToken } from "../helpers/generateTokens.js"

const refreshAccessToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({error: "Shocks! Please login in."})
    }

    // Verify Refresh Token
    try {
        const {_id} = jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
        const user = await User.findOne({_id})

        // Generate Access Token
        const accessToken = generateAccessToken(user._id)
        const newRefreshToken = generateRefreshToken(user._id)


        // Set HttpOnly Token
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',

        })

        const {firstname, lastname, email, gender} = user
        res.status(200).json({firstname, lastname, email, gender, accessToken})

    } catch(error){
        res.status(401).json({error: `Couldn't verify refresh token. ${error}`})
    }
}

const confirmRefreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    try{
        const {_id} = jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
        await User.findOne({_id})

        res.status(200).json({message: true})
    }catch(error){
        res.status(401).json({error: `Couldn't verify refresh token. ${error}`})
    }

}

export {refreshAccessToken, confirmRefreshToken}
