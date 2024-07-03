import axios from "axios";
import { baseURL } from "../../URL";

const GetAnalyticsDetails = async (FormID: any, config: any) => {
    try {
        const response = await axios.get(`${baseURL}analytics/${FormID}`, config);
        return response.data;
    } catch (error: any) {
        console.log(error?.response)
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
}

export { GetAnalyticsDetails }