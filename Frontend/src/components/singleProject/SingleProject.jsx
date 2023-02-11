import React, { useEffect } from "react";
import "./SingleProject.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { getSingleProject } from "../../actions/project";
import EmployeeDetail from "../EmployeeDetails/EmployeeDetail";
import { Button } from "@mui/material";

const SingleProject = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleProject(id));
  }, [dispatch]);

  const { project, loading } = useSelector((state) => state.project);

  return loading || !project ? (
    <Loader />
  ) : (
    <div className="mainContainer">
      <h1>Project Details</h1>
      <div className="container">
        <div className="Header">
          <div className="HeaderLeft">
            <h2>{project.title}</h2>
            <br />
            Project id <h3>{project._id}</h3>
            <br />
            Project Admin <h3>{project.adminId}</h3>
          </div>
          <div className="HeaderRight">
            Status
            <h3>{project.status}</h3>
            <br />
            Project Type<h3>{project.type}</h3>
            <br />
          </div>
        </div>
        <div className="containerBody">
          <div className="containerBodyLeft">
            Project Deadline<h3>{project.deadline}</h3>
            <br />
            Project Creation Date<h3>{project.createdAt}</h3>
            <br />
          </div>
          Project Description<h3>{project.desc}</h3>
        </div>
      </div>
      <div>
        <h2>Resources</h2>
        <div>
          {project.resources.length !=0? project.resources.map((ele) => (
            <div>
              <Button
                onClick={() => {
                  navigate(`/resource/${ele}`);
                }}
                variant="text"
              >
                {ele}
              </Button>
            </div>
          )):<h2>No resources assigned</h2>}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
