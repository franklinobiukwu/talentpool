import useAxiosInstance from "./useAxiosInstance.jsx";

const fetchData = (endpoint) => {

    // Get user
    const user = JSON.parse(localStorage.getItem('user'))

    // Create Custom Axios Instance
    const axiosInstance = useAxiosInstance()

    // Config for axios
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.accessToken}`
        }
    }

    return axiosInstance.get(endpoint, config)
}

// Function to Post to Backend
const postData = ({endpoint, data}) => {

    // Get user
    const user = JSON.parse(localStorage.getItem('user'))

    // Create Customer Axios Instance
    const axiosInstance = useAxiosInstance()

    // Config for axios
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.accessToken}`
        }
    }

    return axiosInstance.post(endpoint, data, config)
}

// Function to Update Data in Backend
const patchData = ({endpoint, data}) => {

    // Get user
    const user = JSON.parse(localStorage.getItem('user'))

    // Create Customer Axios Instance
    const axiosInstance = useAxiosInstance()

    // Config for axios
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.accessToken}`
        }
    }

    return axiosInstance.patch(endpoint, data, config)
}

// Function to Delete Data in Backend
const deleteData = (endpoint, data) => {

    // Get user
    const user = JSON.parse(localStorage.getItem('user'))

    // Create Customer Axios Instance
    const axiosInstance = useAxiosInstance()

    // Config for axios
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.accessToken}`
        }
    }

    return axiosInstance.delete(endpoint, data, config)
}

export {fetchData, postData, patchData, deleteData}
