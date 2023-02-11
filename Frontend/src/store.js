import { configureStore } from "@reduxjs/toolkit"
import {userReducer} from './reducers/users'
import {projectReducer} from './reducers/project'
import {resourceReducer} from './reducers/resource'
import { detailReducer } from "./reducers/details";
import { superLeaveReducer } from "./reducers/superLeave";

const store = configureStore({
    reducer:{
        user:userReducer,
        project:projectReducer,
        resource:resourceReducer,
        Detail:detailReducer,
        superLeaves:superLeaveReducer
    }
})
export default store;
