import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

// Function that returns signed jwtoken
const generateAccessToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_TOKEN, { expiresIn: '1d'})
}

// Login Controller Function
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        // Generate Access Token
        const token = generateAccessToken(user._id)
        const {firstname, lastname, gender} = user
        res.status(200).json({firstname, lastname, email, gender, token})
        
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

        const token = generateAccessToken(user._id)
        res.status(201).json({firstname, lastname, email, gender, token})
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// User Profile 
const userProfile = async (req, res) => {
    
}
export { loginUser, signupUser}
