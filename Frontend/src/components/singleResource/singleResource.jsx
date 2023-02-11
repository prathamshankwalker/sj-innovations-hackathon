import React, { useEffect } from "react";
import "./singleResource.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResourceInfo } from "../../actions/resource";
import { Avatar } from "@mui/material";
import Loader from "../Loader/Loader";
import Tabss from "../Tabs/Tabs";
import { CChart } from "@coreui/react-chartjs";

const SingleResource = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getResourceInfo(id));
  }, []);

  const { resource, loading } = useSelector((state) => state.resource);
  const total = 150;
  var Assigned = resource?.user?.hours_worked;
  var available = total - Assigned;

  var data = {
    labels: ["Assigned", "Available"],
    datasets: [
      {
        backgroundColor: ["#41B883", "#E46651"],
        data: [Assigned, available],
      },
    ],
  };
  return loading || !resource ? (
    <Loader />
  ) : (
    <div className="main">
      <div className="upperContainer">
        <div className="childLeftContainer">
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 150, height: 150 }}
            src="data:image/png;base64,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"
          />
        </div>
        <div className="childRightContainer">
          {/* {/* {console.log("Printing")} */}
          {console.log(resource?.user?._id)}
          <h1>{resource?.user?.name}</h1>
          <h4>{resource?.user?.designation}</h4>
        </div>
      </div>
      <div className="lowerContainer">
        <Tabss assignments={resource} />
        {/* table */}
      </div>
    </div>
  );
  // <div>
  //   <div>
  //     <h2>Resoure Info</h2>
  //     <div>
  //         Id: {resource?.user?._id}<br/>
  //         Name: {resource?.user?.name}<br/>
  //         DOB: {resource?.user?.dob}<br/>
  //         Gender: {resource?.user?.gender}<br/>
  //         WFH: {resource?.user?.WFH}<br/>
  //         Designation: {resource?.user?.designation}<br/>
  //         Hours Worked: {resource?.user?.hours_worked}<br/>
  //         Hours Available: {resource?.user?.hours_available}<br/>
  //         Fatigue: {resource?.user?.fatigue}<br/>
  //     </div>
  //   </div>
  //   <div>
  //     <h2>Assignments</h2>
  //       <div>
  //         {resource?.assignment.map((ele)=>
  //           <div>
  //             <div>
  //               <h3>Week1</h3>
  //               {ele.w1.map((ele)=>
  //                 <div>
  //                   Project Id {ele.projectId} <br/>
  //                   Hours {ele.hours} <br/>
  //                   <button onClick={()=>{
  //                     navigate(`/project/${ele.projectId}`)
  //                     }}>
  //                     To project
  //                   </button>
  //                 </div>
  //               )}
  //             </div>
  //             <div>
  //               <h3>Week2</h3>
  //               {ele.w2.map((ele)=>
  //                 <div>
  //                   Project Id {ele.projectId} <br/>
  //                   Hours {ele.hours} <br/>
  //                   <button onClick={()=>{
  //                     navigate(`/project/${ele.projectId}`)
  //                     }}>
  //                     To project
  //                   </button>
  //                 </div>
  //               )}
  //             </div>
  //             <div>
  //               <h3>Week3</h3>
  //               {ele.w3.map((ele)=>
  //                 <div>
  //                   Project Id {ele.projectId} <br/>
  //                   Hours {ele.hours} <br/>
  //                   <button onClick={()=>{
  //                     navigate(`/project/${ele.projectId}`)
  //                     }}>
  //                     To project
  //                   </button>
  //                 </div>
  //               )}
  //             </div>
  //             <div>
  //               <h3>Week4</h3>
  //               {ele.w4.map((ele)=>
  //                 <div>
  //                   Project Id {ele.projectId} <br/>
  //                   Hours {ele.hours} <br/>
  //                   <button onClick={()=>{
  //                     navigate(`/project/${ele.projectId}`)
  //                     }}>
  //                     To project
  //                   </button>
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //   </div>

  // </div>
};

export default SingleResource;
