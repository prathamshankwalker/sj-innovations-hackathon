import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/users";
import { projectReducer } from "./reducers/project";
import { detailReducer } from "./reducers/details";
import { superLeaveReducer } from "./reducers/superLeave";
// import {allMedsReducer} from './reducers/meds'
// import {allSalesReducer,cartsReducer} from './reducers/sales'

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    Detail: detailReducer,
    superLeaves: superLeaveReducer,
  },
});
export default store;
