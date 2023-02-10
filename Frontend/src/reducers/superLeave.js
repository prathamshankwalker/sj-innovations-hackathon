import { createReducer } from "@reduxjs/toolkit";

const initialState = {};
export const superLeaveReducer = createReducer(initialState, {
  // dispatch types or cases for reducer
  superLeaveRequest: (state, action) => {
    state.loading = true;
  },
  superLeaveSuccess: (state, action) => {
    state.superLeaves = action.payload;
    state.loading = false;
  },
  superLeaveFailure: (state, action) => {
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
