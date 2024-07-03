import { baseURL } from "../../URL";

const CreateSystemUsers = async (postData:any, config:any)=>{


    const myHeaders = new Headers();
    myHeaders.append("Authorization",config.headers.Authorization)
    myHeaders.append("Content-Type", "application/json");

    try {
       
        const requestOptions :RequestInit= {
            method: "POST",
            headers: myHeaders,
            body:JSON.stringify (postData),
            redirect: "follow"
          };
          
var response = await fetch(`${baseURL}users`, requestOptions)
 
 var jsonresponse=response.json()

 return jsonresponse


    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }

}




const asignProjectuser = async (postData:any, config:any)=>{


    const myHeaders = new Headers();
    myHeaders.append("Authorization",config.headers.Authorization)
    myHeaders.append("Content-Type", "application/json");

    try {
       
        const requestOptions :RequestInit= {
            method: "POST",
            headers: myHeaders,
            body:JSON.stringify (postData),
            redirect: "follow"
          };
          
var response = await fetch(`${baseURL}project_role/assign`, requestOptions)
 
 var jsonresponse=response.json()

 return jsonresponse


    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }

}

export {asignProjectuser,CreateSystemUsers}