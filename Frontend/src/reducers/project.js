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
    
    clearError:(state,action)=>{
        state.error = null
    },
    clearMessage:(state,action)=>{
        state.message = null
    }
})

