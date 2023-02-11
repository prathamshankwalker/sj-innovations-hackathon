import {createReducer} from "@reduxjs/toolkit"

const initialState = {}
export const projectReducer = createReducer(initialState,{
    
    // dispatch types or cases for reducer
    GetUserProjectsRequest: (state,action)=>{
        state.loading = true;
    },
    GetUserProjectsSuccess: (state,action)=>{
        state.projects = action.payload
        state.loading = false;
    },
    GetUserProjectsFailure: (state,action)=>{
        state.error = action.payload
        state.loading = false;
    },
    GetSingleProjectRequest: (state,action)=>{
        state.loading = true;
    },
    GetSingleProjectSuccess: (state,action)=>{
        state.project = action.payload
        state.loading = false;
    },
    GetSingleProjectFailure: (state,action)=>{
        state.error = action.payload
        state.loading = false;
    },
    GetAllProjectsRequest: (state,action)=>{
        state.loading = true;
    },
    GetAllProjectsSuccess: (state,action)=>{
        state.projects = action.payload
        state.loading = false;
    },
    GetAllProjectsFailure: (state,action)=>{
        state.error = action.payload
        state.loading = false;
    },
    AddProjectRequest: (state,action)=>{
        state.loading = true;
    },
    AddProjectSuccess: (state,action)=>{
        state.message = "Project Created"
        state.loading = false;
    },
    AddProjectFailure: (state,action)=>{
        state.error = action.payload
        state.loading = false;
    },
    clearError:(state,action)=>{
        state.error = null
    },
    clearMessage:(state,action)=>{
        state.message = null
    }
})

