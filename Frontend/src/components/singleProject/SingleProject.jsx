import React, { useEffect } from "react";
import "./SingleProject.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { getSingleProject } from "../../actions/project";
import EmployeeDetail from "../EmployeeDetails/EmployeeDetail";

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
    <div>
      <div>
        <h2>Project Details</h2>
        Project id <h3>{project._id}</h3>
        Project Admin <h3>{project.adminId}</h3>
        Project Title<h3>{project.title}</h3>
        Project Status<h3>{project.status}</h3>
        Project Type<h3>{project.type}</h3>
        Project Deadline<h3>{project.deadline}</h3>
        Project Description<h3>{project.desc}</h3>
        Project Creation Date<h3>{project.createdAt}</h3>
      </div>
      <div>
        <h2>Resources</h2>
        <div>
          {project.resources.map((ele) => (
            <div>
              <h4>{ele}</h4>
              <button
                onClick={() => {
                  navigate(`/resource/${ele}`);
                }}
              >
                View Resource
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
