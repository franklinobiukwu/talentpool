import express from 'express'
import {
    fetchProfile, loginUser,
    signupUser, updateProfile } from '../../controllers/userController.js'
import requireAuth from '../../middleware/requireAuth.js'

const router = express.Router()


// Login route
router.post('/login', loginUser)

// Signup route
router.post('/signup', signupUser)

// Middleware to ensure user is authorized
router.use(requireAuth)

// Update Profile (Create, Update, Delete)
router.post('/profile', updateProfile)

// Fetch User Profile
router.get('/profile', fetchProfile)
console.log('PASTTTTTTTT')

export default router
