import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../actions/project";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./AllProjects.css";
import MediaCard from "../Cards/card";

const AllProjects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const { projects, loading } = useSelector((state) => state.project);

  return loading || !projects ? (
    <Loader />
  ) : (
    <div>
      <h1>All projects</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          alignItems: "flex-start",
        }}
      >
        {projects.map((ele) => (
          <div>
            <MediaCard
              key={ele._id}
              id={ele._id}
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

export default AllProjects;
