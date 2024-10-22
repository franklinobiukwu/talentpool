import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const requireAuth = async (req, res, next) => {
    const { authorization} = req.headers

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({error: "Shocks! You are not authorised to view this page"})
    }
    // Split authorization to obtain access token
    const accessToken = authorization.split(' ')[1]

    try{
        // Verify access token
        const {_id} = jwt.verify(accessToken, process.env.SECRET_TOKEN)
        const user = await User.findOne({_id})

        if (!user) {
            return res.status(404).json({error: "User not found"})
        }

        req.user = user

        next()
    }catch(error){
        res.status(401).json(
            {error: `Unauthorized Request! Your request cannot be granted. ${error}`}
        )
    }
}
export default requireAuth
