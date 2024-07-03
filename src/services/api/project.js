import axios from "axios";
import { baseURL } from "../../URL";
import { projectFormData } from "../../typings/project";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { useAuth } from "../../functions/authentication";


const onCreateProject = async (postData: FormData, config: any) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization",config.headers.Authorization)

    try {
       
        const requestOptions :RequestInit= {
            method: "POST",
            headers: myHeaders,
            body: postData,
            redirect: "follow"
          };
          
var response = await fetch(`${baseURL}projects`, requestOptions)
 
 var jsonresponse=response.json()

 return jsonresponse


    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};




const GetAllProjects = async (config:any) => {

    console.log(config,'config.....')
    try {
        const response = await axios.get(`${baseURL}projects/organization`,config);
        return response.data.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};




const GetProjectIdentities = async (projectID: string) => {
    try {
        const response = await axios.get(`${baseURL}didentity/ProjectIdentities/${projectID}`);
        return response.data.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } 
        else {
            throw error?.response?.data?.message;
        }
    }
};

export { GetAllProjects, GetProjectIdentities, onCreateProject}
