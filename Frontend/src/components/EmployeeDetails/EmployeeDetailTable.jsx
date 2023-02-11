import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import "./EmployeeDetailTable.css";
const EmployeeDetailTable = (props) => {
  // const { Detail, Detail_loading } = useSelector((state) => state.Detail);
  const { resource, loading } = useSelector((state) => state.resource);

  var week = resource.assignment[0].w1;
  if (Object.keys(props).length == 1) {
    week = resource.assignment[0].w1;
  } else if (Object.keys(props).length == 2) {
    week = resource.assignment[0].w2;
  } else if (Object.keys(props).length == 3) {
    week = resource.assignment[0].w3;
  } else if (Object.keys(props).length == 4) {
    week = resource.assignment[0].w4;
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      {console.log(resource.assignment[0])}
      {console.log(Object.keys(props).length)}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Hours </th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(week[0])} */}

          {week?.map((ele) => (
            <tr>
              <td>{ele.projectId}</td>
              <td>{ele.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="childLowerContainer">
        <div className="childLowerLeftContainer">
          {" "}
          <h4>Stress Bar:-</h4>
          {resource?.user?.fatigue}
          <div className="childLowerRightContainer">
            <h4>Available:-</h4>
            {resource?.user?.hours_available - resource?.user?.hours_worked}
            <h4>Assigned:-</h4>
            {resource?.user?.hours_worked}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetailTable;
