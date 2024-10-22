import { useParams } from "react-router-dom"

const AssetCategoryPage = () => {
    const { categoryId } = useParams()
    console.log( categoryId )
    return (
        <div>
            <p>Asset Category Page</p>
        </div>
    )
}
export default AssetCategoryPage
