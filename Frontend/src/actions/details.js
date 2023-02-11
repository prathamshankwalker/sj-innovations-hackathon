import axios from "axios";
import "../axios";

// We use double arrow functions
export const getUserDetails = (id) => async (dispatch) => {
  console.log("/api/v1/admin/resource/" + id);
  const url = "/api/v1/admin/resource/" + id;
  try {
    dispatch({
      type: "GetUserDetailRequest",
    });
    const { data } = await axios.get(url);
    // console.log(data);
    dispatch({
      type: "GetUserDetailSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data, error.response.status);
    dispatch({
      type: "GetUserDetailFailure",
      payload: error.response.data,
    });
  }
};
