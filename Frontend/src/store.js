import { configureStore } from "@reduxjs/toolkit"
import {userReducer} from './reducers/users'
import {projectReducer} from './reducers/project'
import {resourceReducer} from './reducers/resource'

const store = configureStore({
    reducer:{
        user:userReducer,
        project:projectReducer,
        resource:resourceReducer
    }
})
export default store