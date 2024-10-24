import { fetchData } from "../hooks/useFetchPost"
import { useQuery } from "@tanstack/react-query"
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
        <div>
            <p>Asset Category Page</p>
        </div>
    )
}
export default AssetCategoryPage
