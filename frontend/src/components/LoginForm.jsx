import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios"
import useEndpoint from "../hooks/useEndPoint.jsx"
import { useNavigate } from "react-router-dom"
import SubmitButton from "./SubmitButton.jsx"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Error States
    const [validEmail, setValidEmail] = useState(false)

    // Navigation
    const navigate = useNavigate()

    // Validate Email
    useEffect( () => {
       setValidEmail(EMAIL_REGEX.test(email)) 
    }, [email])

 //   const queryClient = useQueryClient()

    // Login Handler
    const endpoint = useEndpoint()
    
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: (userData) => axios.post(`${endpoint}/user/login`, userData),
        onSuccess: (data) => {
//            queryClient.setQueryData(['user'], data.data)
            console.log(data.data, "Na the user")
            localStorage.setItem('user', JSON.stringify(data.data))
            navigate('/dashboard')
        }
    })

    const handleLogin = () => {
        mutate({ email, password })
    }

    return (
        <div>
            <h3 className="text-blue-primary font-inter font-bold text-xl mb-5">
                Log In
            </h3>
            <div className="flex items-center justify-center">

                <form autoComplete="off" onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}>
                    {/* Email */}
                    <div>
                        <label 
                            htmlFor="email"
                            className="block mb-2 text-blue-primary
                                        font-inter font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="johndoe@abc.com"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`focus:${validEmail?"outline-blue-trans2":"outline-red-300"} md:min-w-56 px-2 py-1 rounded text-blue-primary`}
                        />
                    </div>
                    {/* Password */}
                    <div className="mt-5">
                        <label
                            htmlFor="password" 
                            className="block mb-2 text-blue-primary
                                        font-inter font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus:outline-blue-trans2 md:min-w-56 px-2 py-1 rounded text-blue-primary"
                        />
                    </div>
                    {/* Display Error */}
                    {
                        isError&&
                            (<div className="mt-2 px-2 bg-red-50 border border-red-100 rounded">
                                {error?.response?.data?.error || "Login failed. Please try again"}
                            </div>)
                    }
                    {/* Button */}
                    <div className="flex items-center justify-center mt-8">
                        <SubmitButton
                            text="Login" 
                            style="solid"
                            isLoading={isPending}
                            type="submit"
                            disabled={!validEmail || !password || isPending}
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm
