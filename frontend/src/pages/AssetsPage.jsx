import { useQuery } from "@tanstack/react-query"
import AssetCategoryCard from "../components/AssetCategoryCard"
import AssetForm from "../components/AssetForm"
import { fetchData } from "../hooks/useFetchPost"
import Skeleton from "react-loading-skeleton"

const AssetsPage = () => {
    // Fetch User Asset Categories
//    const assetCategories =  a
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['assetCategories'],
        queryFn: () => fetchData('/assets/categories')
    })
    console.log(data?.data, "categories")
    return (
        <div className="py-5">
            <div className="flex gap-4">
                {isPending? <Skeleton count={2}/> : (
                    data.data.map(category => (
                        <AssetCategoryCard
                            id={category}
                            name={category}
                        />
                    ))
            )}
            </div>
            <h2>Asset Page</h2>
            <AssetForm/>
        </div>
    )
}
export default AssetsPage
