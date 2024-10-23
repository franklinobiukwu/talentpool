import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import FormSelector from "./FormSelector.jsx";
import Button from "./Button.jsx";
import { FaPen, FaRegSave } from "react-icons/fa"
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, patchData, postData } from "../hooks/useFetchPost.jsx";
import Skeleton from "react-loading-skeleton";
import { MdOutlineCancel } from "react-icons/md";


const PersonalInfo = () => {

    const [edit, setEdit] = useState(false)

    // FETCH User Personal Info from db
    const {data, isLoading, isError: isQueryError, error: queryError} = useQuery({
        queryKey: ['personalInfo'],
        queryFn: () => fetchData('/user/profile'),
    })

    // Convert '1995-08-05T00:00:00.000Z' to '1995-08-05'
    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        return date.toISOString().split('T')[0];  // Returns '1995-08-05'
    }

    const [fname, setFname] = useState(data?.data?.user?.firstname || "");
    const [mname, setMname] = useState(data?.data?.user?.middlename || "");
    const [lname, setLname] = useState(data?.data?.user?.lastname || "");
    const [gender, setGender] = useState("male");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
        const user = data?.data
        setFname(user?.firstname || "")
        setMname(user?.middlename || "")
        setLname(user?.lastname || "")
        setGender(user?.gender || "male")
        setDob(user?.dob && formatDate(user?.dob) || "")
        setEmail(user?.email || "")
        setPhone(user?.phone || "")
        setCountry(user?.country || "")
        setState(user?.state || "")
        setCity(user?.city || "")
        console.log(user, "User Profile Info")
    }, [data])

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
        mutationFn: patchData,
        onSuccess: (data) => console.log(`Success updating profile`, data.data,)
    })

    const handleSave = () => {

        if (!fname || !lname || !email) {
            alert('Please fill in required fields')
            return
        }
        const formData = {
            firstname: fname, middlename: mname, lastname:lname,
            gender, dob, email, phone, country, state, city
        }
        console.log(formData, "Form data to save")
        mutate({endpoint: '/user/profile', data: formData})
        if (isError){
            alert(error)
        } else {
            setEdit(!edit)
        }
    }

    const handleEdit = () => {
        setFname(fname)
        setMname(mname)
        setLname(lname)
        setGender(gender)
        setDob(dob)
        setEmail(email)
        setPhone(phone)
        setCountry(country)
        setState(state)
        setCity(city)
        setEdit(!edit)

        console.log(fname, mname, lname, gender, dob, email, phone, country, state, city)
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
                            {data?(
                                <input
                                id="fname"
                                name="fname"
                                type="text"
                                placeholder="John"
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                disabled={!edit}
                                />
                            )
                            : (<Skeleton />)}
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
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={mname}
                                onChange={(e) => setMname(e.target.value)}
                                disabled={!edit}
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
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                disabled={!edit}
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
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                disabled={!edit}
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
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                disabled={!edit}
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
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!edit}
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
                                className={
                                    `rounded border px-2 py-0.5 w-52 text-blue-primary
                                    ${!edit && 'border-none bg-transparent px-0'}`}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                disabled={!edit}
                            />
                        </div>
                        {/* Country Selector */}
                        <div>
                            <FormSelector
                                options={countries}
                                label="Country"
                                name="country"
                                value={country}
                                setValue={setCountry}
                                disabled={!edit}
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
                                value={state}
                                setValue={setState}
                                className="mr-5"
                                disabled={!edit}
                            />
                        </div>
                        {/* City Selector */}
                        <div className="col-span-6">
                            <FormSelector
                                options={cities}
                                label="City"
                                name="city"
                                value={city}
                                setValue={setCity}
                                disabled={!edit}
                            />
                        </div>
                    </div>
                    {/*-----------Submit----------------*/}
                    <div className="flex items-center justify-center">
                        {edit && (
                            <div className="mr-2">
                            <Button
                                text="Cancel"
                                icon={<MdOutlineCancel/>}
                                style="transparent"
                                onClick={() => setEdit(!edit)}
                            />
                            </div>
                        )}

                        <Button
                            text={edit?'Save' : 'Edit'}
                            style={edit? 'solid':'transparent'}
                            icon={edit? (<FaRegSave/>) : (<FaPen/>)}
                            onClick={edit? () => {
                                handleSave()
                            } : () => {
                                handleEdit()
                            }}
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

