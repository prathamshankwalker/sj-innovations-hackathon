import { configureStore } from "@reduxjs/toolkit"
import {userReducer} from './reducers/users'
import {projectReducer} from './reducers/project'
// import {allMedsReducer} from './reducers/meds'
// import {allSalesReducer,cartsReducer} from './reducers/sales'

const store = configureStore({
    reducer:{
        user:userReducer,
        project:projectReducer
    }
})
export default store