import express from 'express'
import { createAsset, getUserAssetCategories, getAssetsOfCategory} from '../controllers/assetController.js';
import requireAuth from '../middleware/requireAuth.js';


const router = express.Router()

// Middleware to ensure user is authorized
router.use(requireAuth)

// Get User Asset Categories
router.get('/categories', getUserAssetCategories)

// Get User Assets of a category
router.get('/categories/:category', getAssetsOfCategory)

// Create Asset
router.post('/', createAsset)

export default router
