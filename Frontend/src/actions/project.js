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
            payload:data.user
        })
    } catch (error) {
        console.log(error.response.data,error.response.status)
        dispatch({
            type:"GetUserProjectsFailure",
            payload:error.response.data
        })
    }    
}