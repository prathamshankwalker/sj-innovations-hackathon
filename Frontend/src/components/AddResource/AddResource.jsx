import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResource } from "../../actions/resource";
import "./AddResource.css";
import Loader from "../Loader/Loader";
import { Button } from "@mui/material";

const AddResource = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.resource);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("r-name");
    const dob = data.get("dob");
    const gender = data.get("gender");
    const WFH = data.get("wfh");
    const designation = data.get("designation");
    const fatigue = 4;
    dispatch(addResource(name, dob, gender, WFH, designation, fatigue));
    // console.log(name, dob, gender, WFH, designation, fatigue);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <h1>Add Resource</h1>
      <form onSubmit={submitHandler}>
        <label className="lb">Title</label>
        <input type="text" name="r-name" placeholder="name" required />
        <label className="lb">Date of birth</label>
        <br />
        <input type="date" name="dob" placeholder="DOB" required />
        <br />
        <br />
        <label className="lb">Gender</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label className="lb">Work From Home</label>
        <select name="wfh">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />
        <label className="lb">Designation</label>
        <select name="designation">
          <option value="1">Intern</option>
          <option value="2">Junior</option>
          <option value="3">Intermidiate</option>
          <option value="4">Senior</option>
          <option value="5">Managerial</option>
        </select>
        <br />
        <Button type="submit" variant="contained">
          Done
        </Button>
      </form>
    </div>
  );
};

export default AddResource;
