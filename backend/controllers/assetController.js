import Asset from "../models/assetModel.js";

const createAsset = async (req, res) => {
    const user_id = req.user._id

    const newAsset = {...req.body, user_id}

    try{
        const response = await Asset.create(newAsset)
        res.status(201).json(response)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

// Fetch User Asset Categories
const getUserAssetCategories = async(req, res) => {
    const user_id = req.user._id

    try{
        const userAssets = await Asset.find({ user_id}).sort({createdAt: -1})
        // Create categories array
        const userCategories = []
        userAssets.forEach(asset => {
            if (asset.assetCategory){
                userCategories.push(asset.assetCategory)
            }
        })
        const uniqueUserCategories = [...new Set(userCategories)]
        res.status(200).json(uniqueUserCategories)
    }catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

// Fetch Assets of Specific Category
const getAssetsOfCategory = async (req, res) => {
    const user_id = req.user._id
    const assetCategory = req.params.category

    // Fetch Assets
    try{
        const assetsOfCategory = await Asset.find({assetCategory, user_id}).sort({createdAt: -1})
        console.log(assetsOfCategory)
        res.status(200).json(assetsOfCategory)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    console.log(assetCategory, "Category been queried")
}

export {createAsset, getUserAssetCategories, getAssetsOfCategory}
