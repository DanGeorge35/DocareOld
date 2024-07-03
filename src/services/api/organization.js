import axios from "axios";
import { baseURL } from "../../URL";

const UpdateVersion =async (postData:any, config:any)=>{


    try {
        const response = await axios.post(`${baseURL}/version`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
}

export {UpdateVersion}