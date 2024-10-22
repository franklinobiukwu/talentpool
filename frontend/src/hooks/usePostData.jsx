import axios from "axios"

const usePostData = () => {
    const postData = async (dataObj, endpoint, config, loadState, errorState) => {
        loadState(true)
        try{
            const response = await axios.post(endpoint, dataObj, config)
            loadState(false)
            return response.data
        }catch(error){
            errorState(error.response.data)
        }finally{
            loadState(false)
        }
    }

    return postData
}
export default usePostData
