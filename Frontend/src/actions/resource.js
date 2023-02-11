import axios from "axios"
import '../axios'

// We use double arrow functions
export const getResourceInfo = (id) =>async(dispatch)=>{
    try {
        dispatch({
            type:"GetResourceInfoRequest"
        })
        const {data} = await axios.get(`/api/v1/admin/resource/${id}`)
        dispatch({
            type:"GetResourceInfoSuccess",
            payload:data
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetResourceInfoFailure",
            payload:error.response.data
        })
    }    
}
export const addResource = (name,dob,gender,WFH,designation,fatigue) => async(dispatch)=>{
    try {
        dispatch({
            type:"AddResourceRequest"
        })
        const {data} = await axios.post("/api/v1/admin/add-resource",
        {name,dob,gender,WFH,designation,fatigue},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"AddResourceSuccess",
            payload:"Resource Added"
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"AddResourceFailure",
            payload:error.response.data
        })
    }    
}
export const assignResource = (resourceId,projectId,week,hours) => async(dispatch)=>{
    try {
        dispatch({
            type:"AssignResourceRequest"
        })
        const {data} = await axios.post("/api/v1/admin/assign-resource",
        {resourceId,projectId,week,hours},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"AssignResourceSuccess",
            payload:"Resource Assigned"
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"AssignResourceFailure",
            payload:error.response.data
        })
    }    
}