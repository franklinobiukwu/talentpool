import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useLogin = () => {

    const login = () => {
        const { data, isLoading, isError, error } = useQuery({
            queryKey: ['login'],
            queryFn: () => axios.post(`${process.env.API}/login`)
        })
    }

    return login
}
export default useLogin
