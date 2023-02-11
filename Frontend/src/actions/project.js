import axios from "axios"
import '../axios'

// We use double arrow functions
export const getUserProjects = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetUserProjectsRequest"
        })
        const {data} = await axios.get("/api/v1/admin/project/user/")
        dispatch({
            type:"GetUserProjectsSuccess",
            payload:data.projects
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetUserProjectsFailure",
            payload:error.response.data
        })
    }    
}
export const getAllProjects = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetAllProjectsRequest"
        })
        const {data} = await axios.get("/api/v1/admin/project/all/")
        dispatch({
            type:"GetAllProjectsSuccess",
            payload:data.projects
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetAllProjectsFailure",
            payload:error.response.data
        })
    }    
}
export const getSingleProject = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetSingleProjectRequest"
        })
        const {data} = await axios.get(`/api/v1/admin/single-project/${id}`)
        dispatch({
            type:"GetSingleProjectSuccess",
            payload:data.project
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetSingleProjectFailure",
            payload:error.response.data
        })
    }    
}