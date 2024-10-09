import express from 'express'
import { fetchProfile, loginUser, signupUser, updateProfile } from '../../controllers/userController.js'

const router = express.Router()

// Login route
router.post('/login', loginUser)

// Signup route
router.post('/signup', signupUser)

// Update Profile (Create, Update, Delete)
router.post('/profile', updateProfile)

// Fetch User Profile
router.get('/profile', fetchProfile)

export default router
