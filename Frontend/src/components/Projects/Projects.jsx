import React from "react";
import { Button } from "@mui/material";
import "./Projects.css";
import MediaCard from "../Cards/card";

const Projects = () => {
  return (
    <div className="main">
      <div className="header">
        <Button variant="contained">Add Project</Button>
      </div>
      <div className="Body">
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
        <div>
          <MediaCard
            ProjectName="Project one"
            ProjectDetails="This is project one"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
