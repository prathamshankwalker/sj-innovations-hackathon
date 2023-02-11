import { createReducer } from "@reduxjs/toolkit";

const initialState = {};
export const detailReducer = createReducer(initialState, {
  // dispatch types or cases for reducer
  GetUserDetailRequest: (state, action) => {
    state.loading = true;
  },
  GetUserDetailSuccess: (state, action) => {
    state.Detail = action.payload;
    state.loading = false;
  },
  GetUserDetailFailure: (state, action) => {
    state.error = action.payload;
    state.loading = false;
  },

  clearError: (state, action) => {
    state.error = null;
  },
  clearMessage: (state, action) => {
    state.message = null;
  },
});
