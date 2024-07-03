import axios from "axios";
import { baseURL } from "../../URL";

const getAllProjectRoles= async (config:any)=>{
        try {
            const response = await axios.get(`${baseURL}project_role`,config);
            return response.data;
        } catch (error: any) {
            if (error?.response?.data?.message === undefined) {
                throw error.message
            } else {
                throw error?.response?.data?.message;
            }
        }
    };  

export{getAllProjectRoles}
