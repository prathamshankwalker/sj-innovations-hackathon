import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import "./EmployeeDetailTable.css";
const EmployeeDetailTable = (props) => {
  const { Detail, Detail_loading } = useSelector((state) => state.Detail);
  var week = Detail.assignment[0].w1;
  if (Object.keys(props).length == 1) {
    week = Detail.assignment[0].w1;
  } else if (Object.keys(props).length == 2) {
    week = Detail.assignment[0].w2;
  } else if (Object.keys(props).length == 3) {
    week = Detail.assignment[0].w3;
  } else if (Object.keys(props).length == 4) {
    week = Detail.assignment[0].w4;
  }

  return Detail_loading ? (
    <Loader />
  ) : (
    <>
      {console.log(Detail)}
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
          {week.map((ele) => (
            <tr>
              <td>{ele.projectId}</td>
              <td>{ele.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="childLowerContainer">
        <div className="childLowerLeftContainer"> Stress Bar</div>
        <div className="childLowerRightContainer"> Calculation</div>
      </div>
    </>
  );
};

export default EmployeeDetailTable;
