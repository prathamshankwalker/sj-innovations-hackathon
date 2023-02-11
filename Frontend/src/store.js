import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/users";
import { projectReducer } from "./reducers/project";
import { detailReducer } from "./reducers/details";
import { superLeaveReducer } from "./reducers/superLeave";

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
  },
});
export default store;
