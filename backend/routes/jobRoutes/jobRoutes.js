import express from 'express'
import { listAllJobs, createJobPost, updateJobPost, deleteJobPost } from '../../controllers/jobPost.js'

const router = express.Router()

// list all job posts route
router.post('/', listAllJobs)

// create a job post route
router.post('/addJob', createJobPost)

//update a job post route
router.post('/updateJob', updateJobPost)

// delete a job post route
router.delete('/deleteJob/:id', deleteJobPost)

export default router
