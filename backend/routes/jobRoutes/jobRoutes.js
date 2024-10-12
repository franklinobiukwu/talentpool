import express from 'express'
import { listAllJobs, createJobPost, updateJobPost, deleteJobPost } from '../../controllers/jobPost.js'

const router = express.Router()

// list all job posts route
router.post('/login', listAllJobs)

// create a job post route
router.post('/signup', createJobPost)

//update a job post route
router.post('/profile', updateJobPost)

// delete a job post route
router.delete('/delete/:id', deleteJobPost)

export default router
