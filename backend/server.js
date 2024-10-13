import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'


// Import Routes
import userRoutes from './routes/userRoutes/userRoutes.js'
import jobRoutes from './routes/jobRoutes/jobRoutes.js'

// Port to listen
const PORT = process.env.PORT || 3000

// Create express app client
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use("/user", userRoutes)
app.use("/job", jobRoutes)


// Connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // Start Server
    app.listen(PORT, () => {
        console.log(`Server Started at Port ${PORT}`)
    })
})
.catch((err) => {
    console.error(`Couldn't Connect to database\n ${err}`)
})
