import AssetCard from "../components/AssetCard"
import { fetchData } from "../hooks/useFetchPost"
import { useQuery } from "@tanstack/react-query"
import Skeleton from "react-loading-skeleton"
import { useParams } from "react-router-dom"

const AssetCategoryPage = () => {
    const { categoryId } = useParams()
    console.log( categoryId )
    // Fetch Assets of Selected Category
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['categories', categoryId],
        queryFn: () => fetchData(`/assets/categories/${categoryId}`)
    })
    return (
        <div className="py-10">
            <div>
                {!data? <Skeleton count={2}/> : (
                    data.data.map(asset => <AssetCard asset={asset}/>)
                ) }
            </div>
        </div>
    )
}
export default AssetCategoryPage
