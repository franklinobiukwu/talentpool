import { useEffect, useState } from "react"
import SubmitButton from "./SubmitButton.jsx";
import axios from "axios";
import useEndpoint from "../hooks/useEndPoint.jsx";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [firstname, setFname] = useState('')
    const [lastname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Error States
    const [passwordMatchError, setPasswordMatchError] = useState(false)

    // Valid Field State
    const [isValidFirstName, setIsValidFirstName] = useState(false)
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    // Loading State
    const [isLoading, setIsLoading] = useState(false)


    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;

    const navigate = useNavigate()

    // Validate First Name
    useEffect(() => {
        if (firstname){
            setIsValidFirstName(USER_REGEX.test(firstname))
        } else {
            setIsValidFirstName(false)
        }
    }, [firstname])
    // Validate Last Name
    useEffect(() => {
        if (lastname){
            setIsValidLastName(USER_REGEX.test(lastname))
        } else {
            console.log("Setting to false")
            setIsValidLastName(false)
        }
    }, [lastname])

    // Validate Email
    useEffect(() => {
        if (email){
            setIsValidEmail(!EMAIL_REGEX.test(email))
        } else {
            setIsValidEmail(false)
        }
    }, [email])
    // Validate Password Strength
    useEffect(() => {
        if (password){
            setIsValidPassword(!PWD_REGEX.test(password))
        } else {
            setIsValidPassword(false)
        }
    }, [password])
    // Validate Password Match
    useEffect(() => {
        if (password && confirmPassword){
            if (password !== confirmPassword){
                setPasswordMatchError(true)
            }
        }
    }, [password, confirmPassword])
    // Validate Gender

    // Set Error if Password don't match
    useEffect(() => {
        if (password && confirmPassword){
            if (password === confirmPassword){
                setPasswordMatchError(false)
            } else {
                setPasswordMatchError(true)
            }
        }
    },[password, confirmPassword])

    // Form Submit Handler
    const handleSignup = async () => {
        const endpoint = useEndpoint()
        setIsLoading(true)
        const data = {firstname, lastname, email, gender, password, confirmPassword}
        try{
            const response = await axios.post(`${endpoint}/user/signup`, data)
            localStorage.setItem(JSON.stringify(response.data))
            navigate('/dashboard')
        }catch(error){
            console.error(error.response.data)
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div>
            <div className="bg-[#032c480d] shadow-sm border rounded py-10 px-10">
                <form autoComplete="off">
                    {/*--------First Name and Last Name---------*/}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        {/*First Name*/}
                        <div>
                            <label
                                htmlFor="firstname"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="John"
                                value={firstname}
                                onChange={(e) => setFname(e.target.value)}
                                className={`focus:${isValidFirstName?'outline-blue-trans2' : 'outline-red-300'} min-w-48 px-2 py-1 rounded`}
                            />
                        </div>
                        {/* Last Name */}
                        <div>
                            <label
                                htmlFor="lastname"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="Doe"
                                value={lastname}
                                onChange={(e) => setLname(e.target.value)}
                                className={`focus:${isValidLastName?'outline-blue-trans2' : 'outline-red-300'}
                                    min-w-48 px-2 py-1 rounded ${!isValidLastName && 'border border-red-500'}`}
                            />
                        </div>
                    </div>
                    {/*---------Email and Gender------------*/}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="johndoe@abc.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`focus:${isValidEmail?'outline-red-300' : 'outline-blue-trans2'} min-w-48 px-2 py-1 rounded`}
                            />
                        </div>
                        {/* Gender */}
                        <div>
                            <label
                                htmlFor="gender"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Gender
                            </label>
                            <select
                                onChange={(e) => setGender(e.target.value)}
                                className="focus:outline-blue-trans2 min-w-48 px-2 py-1 rounded"
                            >
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>
                        </div>
                    </div>
                    {/*---------Password and Confirm Password------------*/}
                    <div className="flex items-center justify-center gap-4">
                        {/* Password */}
                        <div className="flex flex-col self-start">
                            <label
                                htmlFor="password"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`focus:${isValidPassword?'outline-red-300' : 'outline-blue-trans2'} min-w-48 px-2 py-1 rounded`}
                            />
                            {isValidPassword && <div className="text-red-500">
                                * must contain Uppercase<br/>
                                * must contain lowercase<br/>
                                * must contain number<br/>
                                * must be atleast 8 digits long</div>}
                        </div>
                        {/* Confirm Password */}
                        <div className="flex flex-col self-start">
                            <label
                                htmlFor="cpassword"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                placeholder="********"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={
                                    `focus:${passwordMatchError? 'outline-red-50' : 'outline-blue-trans2'}
                                    min-w-48 px-2 py-1 rounded`}
                            />
                            {passwordMatchError && <div className="text-red-500">Password doesn't match</div>}
                        </div>
                    </div>
                    {/*-----------Button-------------*/}
                    <div className="flex justify-center items-center mt-10">
                        <SubmitButton
                            style="default"
                            text="Signup" 
                            onClick={handleSignup}
                            disabled={isValidPassword || isValidEmail || passwordMatchError || !firstname || !lastname || !email || !gender || !password || !confirmPassword}
                            isLoading={isLoading}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
