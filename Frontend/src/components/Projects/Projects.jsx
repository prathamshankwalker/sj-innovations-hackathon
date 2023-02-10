import React,{useEffect} from "react";
import { Button } from "@mui/material";
import "./Projects.css";
import MediaCard from "../Cards/card";
import {useDispatch,useSelector} from 'react-redux'
import {getUserProjects} from '../../actions/project'
import Loader from "../Loader/Loader";

const Projects = () => {
  const {loading,projects} = useSelector((state)=>state.project);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getUserProjects())
  },[dispatch])

  return (
    loading?<Loader/>:
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
