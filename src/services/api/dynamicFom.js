import axios from "axios";
import { baseURL } from "../../URL";
import { FormFieldDTO, FormStructureDTO,  } from "../../typings/forms";

const onCreateFormStructure = async (postData: any, config: any) => {
  


    const myHeaders = new Headers();
    myHeaders.append("Authorization",config.headers.Authorization)

    try {
       
        const requestOptions :RequestInit= {
            method: "POST",
            headers: myHeaders,
            body: postData,
            redirect: "follow"
          };
          
var response = await fetch(`${baseURL}/dforms`, requestOptions)
 
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
const onGetAllForms = async (config: any) => {
    try {
        const response = await axios.get(`${baseURL}dforms/organization`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};


const onGetAllProjectForms = async (ProjectID:number ,config: any,page:number) => {
    try {
        const response = await axios.get(`${baseURL}dforms/project/${ProjectID}?page=${page}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};

const onGetFormDetails = async (id: any, config: any) => {
    try {
        const response = await axios.get(`${baseURL}/dforms/${id}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onCreateFormField = async (postData: FormFieldDTO, config: any) => {
    try {
        const response = await axios.post(`${baseURL}/dfields`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onAsignForm = async (postData: any, config: any) => {
    try {
        const response = await axios.post(`${baseURL}assign_forms`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};



const onCreateFormPermission = async (postData: any, config: any) => {
    try {
        const response = await axios.post(`${baseURL}/mobileformpermission`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const OnUpdateFormStatus = async (postData: {
    AuthorID: string,
    Status: string,
}, FormID: string, config: any) => {
    try {
        const response = await axios.patch(`${baseURL}/dforms/${FormID}`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onGetFormRecord= async (id: any, config: any) => {
    try {
        const response = await axios.get(`${baseURL}/drecords/${id}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};

export { onGetFormRecord,onAsignForm,onGetAllProjectForms,onCreateFormStructure, onGetAllForms, onGetFormDetails, onCreateFormField, onCreateFormPermission, OnUpdateFormStatus }