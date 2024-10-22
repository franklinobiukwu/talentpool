import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { generateAccessToken, generateRefreshToken } from "../helpers/generateTokens.js";


// Login Controller Function
const loginUser = async (req, res) => {
    const {email, password} = req.body
    console.log(req.body)

    try{
        const user = await User.login(email, password)

        // Generate Access Token
        const accessToken = generateAccessToken(user._id)
        const refreshToken = generateRefreshToken(user._id)

        // Set HttpOnly Token
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite:'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        const {firstname, lastname, gender} = user
        res.status(200).json({firstname, lastname, email, gender, accessToken})
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Signup Controller Function
const signupUser = async (req, res) => {
    const {firstname, lastname, email,
        gender, password, confirmPassword} = req.body

    try{
        const user = await User.signup(firstname, lastname, email,
            gender, password, confirmPassword)

        // Generate Access Token
        const accessToken = generateAccessToken(user._id)
        // Generate Refresh Token
        const refreshToken = generateRefreshToken(user._id)
        res.cookie('refreshToken', refreshToken, {httpOnly: true})

        res.status(201).json({firstname, lastname, email, gender, accessToken})
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


// Update or Create User Profile
const updateProfile = async (req, res) => {

}

// Fetch User Profile
const fetchProfile = async (req, res) => {
    const _id = req.user._id
   try{
        const userProfile = await User.findOne({_id})
       res.status(200).json({message: userProfile})
   }catch(error){
        res.status(401).json({error: `There was an error ${error}`})
   } 
}


export { loginUser, signupUser, updateProfile, fetchProfile}
