import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { superLeave } from "../../actions/superLeave";
import Loader from "../Loader/Loader";
import "./Activity.css";

const Activity = () => {
  const { superLeaves, Detail_loading } = useSelector(
    (state) => state.superLeaves
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(superLeave());
  }, [dispatch]);
  return !superLeaves ? (
    <Loader />
  ) : (
    <>
      <div className="Title">
        <h1>Acitvities</h1>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Admin Id</th>
            <th>Resource Id </th>
            <th>reason</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(week[0])} */}
          {superLeaves.leaves.map((ele) => (
            <tr>
              <td>{ele.adminId}</td>
              <td>{ele.resourceId}</td>
              <td>{ele.reason}</td>
              <td>{ele.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Activity;
