import { configureStore } from "@reduxjs/toolkit"
import {userReducer} from './reducers/users'
// import {allMedsReducer} from './reducers/meds'
// import {allSalesReducer,cartsReducer} from './reducers/sales'

const store = configureStore({
    reducer:{
        user:userReducer
    }
})
export default store