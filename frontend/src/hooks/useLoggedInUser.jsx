import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import useEndpoint from "./useEndPoint"
import { useState } from "react"

const confirmToken = (endpoint) => {
    return axios.post(`${endpoint}/token/confirm-token`)
}

const useLoggedInUser = () => {

    const [token, setToken] = useState(false)

    // Get Backend Endpoint
    const endpoint = useEndpoint()
    // Confirm if User is Valid
    const {mutate} = useMutation({
        mutationFn: confirmToken,
        onSuccess: (data) => setToken(data.data),
        onError: (error) => console.error(error)
    })
    mutate(endpoint)
    
    // Get User from Local Storage
    const user = localStorage.getItem('user')
    // Return True if user is valid and false if not
    if (user && token){
        return true
    } else {
        return false
    }
}
useLoggedInUser
