import { useQuery } from "@tanstack/react-query"
import { Navigate, Outlet } from "react-router-dom"
import useAxiosInstance from "../hooks/useAxiosInstance.jsx";

const RequireAuth = () => {

    // Get axios instance
    const axiosInstance = useAxiosInstance()

    // Check if user is Logged In
    const user = localStorage.getItem('user')

    // Validate User Token
    const {isSuccess} = useQuery({
        queryKey: ['confirmToken'],
        queryFn: axiosInstance.get("/token/confirm-token"),
        staleTime: 0,
        cacheTime: 0
    })
    
    const validToken = true
    console.log(isSuccess, "Got Token")

    console.log(user, "User is auth")
    return (
        <div>
             {user && validToken ? 
                 (<Outlet/>) 
                 : 
                 (<Navigate to='/' state={{from: location }} replace />)
             }
        </div>
    )

}
export default RequireAuth