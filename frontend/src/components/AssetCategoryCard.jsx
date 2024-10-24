import { Link } from "react-router-dom"
import AssetImage from "../assets/asset.png"

const AssetCategoryCard = (props) => {
    return (
        <div className="w-60 overflow-hidden rounded shadow-sm shadow-blue-trans">
            <Link to={`/dashboard/assets/categories/${props.id}`}>
                {/* Image */}
                <div>
                    <img src={AssetImage} alt={`asset-${props.title}`}/>
                </div>
                {/* Title */}
                <div className="text-blue-primary bg-red-50 font-inter font-extrabold px-5">
                    <h2 className="text-center">{props.name}</h2>
                </div>
            </Link>
        </div>
    )
}
export default AssetCategoryCard
