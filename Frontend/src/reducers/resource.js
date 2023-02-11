import {createReducer} from "@reduxjs/toolkit"

const initialState = {}
export const resourceReducer = createReducer(initialState,{
    
    // dispatch types or cases for reducer
    GetResourceInfoRequest: (state,action)=>{
        state.loading = true;
    },
    GetResourceInfoSuccess: (state,action)=>{
        state.resource = action.payload
        state.loading = false;
    },
    GetResourceInfoFailure: (state,action)=>{
        state.error = action.payload
        state.loading = false;
    },
    AddResourceRequest: (state,action)=>{
        state.loading = true;
    },
    AddResourceSuccess: (state,action)=>{
        state.message = action.payload
        state.loading = false;
    },
    AddResourceFailure: (state,action)=>{
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

