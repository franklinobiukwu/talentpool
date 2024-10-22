import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import FormSelector from "./FormSelector.jsx";
import Button from "./Button.jsx";
import { FaRegSave } from "react-icons/fa"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useEndpoint from "../hooks/useEndPoint.jsx";
import useAxiosInstance from "../hooks/useAxiosInstance.jsx";

// GET FORM DATA
const fetchPersonalInfo = (config) => {
    const axiosInstance = useAxiosInstance()
    console.log(config, "The config")
    return axiosInstance.get('/user/profile', config)
}

// POST Form Data To Backend
const updatePersonalInfo = (formData, config) => {
    const axiosInstance = useAxiosInstance()
   return axiosInstance.post('/personal-info', {...formData}, config) 
}

const PersonalInfo = () => {

    // FETCH User info from local storage
    const user = JSON.parse(localStorage.getItem('user')) || null

    // Endpoint and Config
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.accessToken}`
        }
    }

    // FETCH User Personal Info from db
    const {data, isLoading, isError: isQueryError, error: queryError} = useQuery({
        queryKey: ['personalInfo'],
        queryFn: () => fetchPersonalInfo(config),
    })

    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("male");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    // User Details


    // Get all countries and states 
    const countries = Country.getAllCountries();
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);


    // Effect to set States of selected country when country changes
    useEffect(() => {
        if (country) {
            // Only trigger if the country has a valid value
            const selectedCountry = countries.find((c) => c.name === country);
            if (selectedCountry) {
                setStates(State.getStatesOfCountry(selectedCountry.isoCode))
            }
        } else return
    }, [country])

    // Effect to Set Cities of Selected State
    useEffect(() => {
        if (state){
            const selectedCountry = countries.find((c) => c.name === country);
            const selectedState = State.getAllStates().find((s) => s.name === state)
            setCities(City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode))
        }else return
    }, [state])


    // Mutate
    const {mutate, isPending, isError, error } = useMutation({
        mutationFn: updatePersonalInfo,
    })

    const handleSave = () => {

        if (!fname || !lname || !email) {
            alert('Please fill in required fields')
            return
        }
        const formData = {
            fname, mname, lname, gender, dob, email, phone, country, state, city
        }
        mutate(formData, config)
    }
    
    return (
        <div>
            <div className="rounded border shadow-sm px-5 py-5">
                <h3 className="text-blue-primary font-inter font-bold text-xl mb-5">
                    Personal Information
                </h3>
                <form>
                    {/*--------------First and Last Names----------------*/}
                    <div className="flex justify-between items-center mb-5">
                        {/* First Name */}
                        <div className="mr-5">
                            <label
                                htmlFor="fname"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                First name
                            </label>
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                placeholder="John"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
//                                disabled={true}
                            />
                        </div>
                        {/* Middle Name */}
                        <div>
                            <label
                                htmlFor="mname"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Middle name
                            </label>
                            <input
                                id="mname"
                                name="mname"
                                type="text"
                                placeholder="Nigel"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={mname}
                                onChange={(e) => setMname(e.target.value)}
                            />
                        </div>
                    </div>

                    {/*-------------------Last Name and Gender-------------------*/}
                    <div className="flex justify-between items-center mb-5">
                        {/* Last Name */}
                        <div>
                            <label
                                htmlFor="lname"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Last name
                            </label>
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                placeholder="Doe"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
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
                                id="gender"
                                name="gender"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>
                        </div>
                    </div>

                    {/*--------------------DOB and Email---------------*/}
                    <div className="flex justify-between items-center mb-5">
                        {/* DOB */}
                        <div>
                            <label
                                htmlFor="dob"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Date of Birth
                            </label>
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="font-medium text-md text-blue-primary block mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="johndoe@example.com"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/*--------------------Phone Number and Country---------------*/}
                    <div className="flex justify-between items-center mb-5">
                        {/* Phone Number */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="font-medium text-md text-blue-primary block mb-1">
                                Phone number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+2348 056 681 680"
                                className="rounded border px-2 py-0.5 w-52 text-blue-primary"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        {/* Country Selector */}
                        <div>
                            <FormSelector
                                options={countries}
                                label="Country"
                                name="country"
                                setValue={setCountry}
                            />
                        </div>
                    </div>

                    {/*------------State and City-----------*/}
                    <div className="flex justify-between items-center mb-12">
                        {/* State Selector */}
                        <div className="mr-5 col-span-6">
                            <FormSelector
                                options={states}
                                label="State"
                                name="state"
                                setValue={setState}
                                className="mr-5"
                            />
                        </div>
                        {/* City Selector */}
                        <div className="col-span-6">
                            <FormSelector
                                options={cities}
                                label="City"
                                name="city"
                                setValue={setCity}
                            />
                        </div>
                    </div>
                    {/*-----------Submit----------------*/}
                    <div className="flex items-center justify-center">
                        <Button
                            text="Save"
                            style="default"
                            icon={<FaRegSave/>}
                            onClick={() => handleSave()}
                            isLoading={isPending}
                            disabled={isPending}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;

