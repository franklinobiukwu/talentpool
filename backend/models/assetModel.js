import { Schema, model } from "mongoose";

const assetSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    assetCategory: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    description: {
        type: String
    }
}, {timestamps: true})

const Asset = model('Asset', assetSchema)
export default Asset
