import axios from "axios";
import "../axios";

// We use double arrow functions
export const superLeave = () => async (dispatch) => {
  const url = "/api/v1/admin/leave/all";
  try {
    dispatch({
      type: "superLeaveRequest",
    });
    const { data } = await axios.get(url);
    console.log(data.leaves);
    dispatch({
      type: "superLeaveSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data, error.response.status);
    dispatch({
      type: "superLeaveFailure",
      payload: error.response.data,
    });
  }
};
