import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'


// Import Routes
import userRoutes from './routes/userRoutes/userRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'
import assetRoutes from './routes/assetRoutes.js'

// Port to listen
const PORT = process.env.PORT || 3000

// Create express app client
const app = express()

// Middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,// Allows cookies to be sent from client
}))
app.use(cookieParser())

// Routes
app.use("/user", userRoutes)
app.use("/token", tokenRoutes)
app.use("/assets", assetRoutes)


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
