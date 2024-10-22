import { confirmRefreshToken, refreshAccessToken } from "../controllers/tokenController.js";
import express from 'express'

const router = express.Router()

router.post('/refresh-token', refreshAccessToken)

router.get('/confirm-token', confirmRefreshToken)
export default router
