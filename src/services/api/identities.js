import axios from "axios";
import { baseURL } from "../../URL";
import { AudienceDto, IdentityAttributesDto, MobileUserDTO } from "../../typings/identities";

const onCreateMobileUser = async (postData: MobileUserDTO, config: any) => {
    try {
        const response = await axios.post(`${baseURL}/users`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onGetMobileUsers = async (config: any) => {
    try {
        const response = await axios.get(`${baseURL}users/organization/mobile`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};


const onGetOrgByID = async (orgid:number ,config: any) => {
    try {
        const response = await axios.get(`${baseURL}organization/id/${orgid}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onGetSystemUsers = async (config: any) => {
    try {
        const response = await axios.get(`${baseURL}users/organization/system`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};

const onGetProjectSystemUsers = async (projectid:any,config: any) => {
    try {
        const response = await axios.get(`${baseURL}projects/users/${projectid}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};


const onGetProjectMobileUsers = async (config: any) => {
    try {
        const response = await axios.get(`${baseURL}users/organization/mobile`, config);
 

        return response.data;

    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};


const onCreateAudience = async (postData: AudienceDto, config: any) => {
    try {
        const response = await axios.post(`${baseURL}/didentity`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onGetIdentityDetails = async (id: any, config: any) => {
    try {
        const response = await axios.get(`${baseURL}/didentity/${id}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onCreateIdentityAttributes = async (postData: IdentityAttributesDto, config: any) => {
    try {
        const response = await axios.post(`${baseURL}/dattribute`, postData, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
const onGetAllIdentities = async (orgID: number, config: any) => {
    try {
        const response = await axios.get(`${baseURL}/didentity/OrganizationIdentities/${orgID}`, config);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};
export {  onGetProjectMobileUsers, onGetProjectSystemUsers, onGetSystemUsers , onCreateMobileUser, onGetMobileUsers,onGetOrgByID, onCreateAudience, onGetIdentityDetails, onCreateIdentityAttributes, onGetAllIdentities }