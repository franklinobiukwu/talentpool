import axios from "axios"
import useEndpoint from "./useEndPoint.jsx";

const useAxiosInstance = () => {
    // Server Base URL (endpoint)
    const endpoint = useEndpoint()

    // Configuring Axios to use a default baseURL and allow credentials
    // (like cookies) to be sent to the server
    const axiosInstance = axios.create({
        baseURL: endpoint,
        withCredentials: true,
    })

    return axiosInstance
}
export default useAxiosInstance
