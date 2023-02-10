import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "./Projects.css";
import MediaCard from "../Cards/card";
import { useDispatch, useSelector } from "react-redux";
import { getUserProjects } from "../../actions/project";
import Loader from "../Loader/Loader";

const Projects = () => {
  const { loading, projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProjects());
  }, [dispatch]);

  return loading || !projects ? (
    <Loader />
  ) : (
    <div className="main">
      <div className="header">
        <Button variant="contained">Add Project</Button>
      </div>
      <div className="Body">
        {projects.map((ele) => (
          <div>
            <MediaCard
              key={ele._id}
              type={ele.type}
              status={ele.status}
              ProjectName={ele.title}
              ProjectDetails={ele.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
