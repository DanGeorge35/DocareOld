import axios from "axios";
import { baseURL } from "../../URL";
import { LoginDto, SigninDto} from "../../typings/auth";

const onLogin = async (postData: LoginDto) => {
    try {
        const response = await axios.post(`${baseURL}/identity/login`, postData);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};


const onSignup = async (postData:  any ) => {

    const myHeaders = new Headers();



        const requestOptions :RequestInit= {
            method: "POST",
            // headers: myHeaders,
            body: postData,
            redirect: "follow"
          };

var response =await fetch(`${baseURL}organization`, requestOptions)
var jsonresponse= await response.json()

 return jsonresponse

};

export { onLogin, onSignup }