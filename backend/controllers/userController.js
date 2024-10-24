import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { generateAccessToken, generateRefreshToken } from "../helpers/generateTokens.js";
import mongoose from "mongoose";


// Login Controller Function
const loginUser = async (req, res) => {
    const {email, password} = req.body

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
    const _id = req.user._id
    console.log(_id, "User ID")

    console.log(req.body, "New User Info")
    //   Ensure only specific fields can be updated
    const allowedUpdates = [
        "firstname", "middlename", "lastname", "gender", "email",
        "dob", "phone", "country", "state", "city"
    ];
    const updates = Object.keys(req.body);

    console.log(allowedUpdates, '\n\n',updates)
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).json({ error: "Invalid update fields" });
    }

	// Try to update service if id is valid
	try{
		const response = await User.findByIdAndUpdate(
            _id,
            {$set: req.body},
            {new: true, runValidators: true}
        ).select(allowedUpdates.join(' '))

        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }

		res.status(200).json(response)
	}catch(error){
		console.error(error)
		res.status(500).json({error: "Couldn't update user profile"})
	}

}

// Fetch User Profile
const fetchProfile = async (req, res) => {
    const _id = req.user._id
   try{
        const user = await User.findOne({_id}).select('-password')

       if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

       res.status(200).json(user)
   }catch(error){
        res.status(401).json({error: `There was an error ${error}`})
   } 
}


export { loginUser, signupUser, updateProfile, fetchProfile}
