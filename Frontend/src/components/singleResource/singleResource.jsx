import React,{useEffect} from 'react'
import "./singleResource.css"
import {useParams,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getResourceInfo} from "../../actions/resource"
import Loader from '../Loader/Loader'

const SingleResource = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    
    useEffect(()=>{
      dispatch(getResourceInfo(id))
    },[])

    const {resource,loading} = useSelector((state)=>state.resource);
    
    return (
      loading || !resource ? <Loader/> :
      <div>
        <div>
          <h2>Resoure Info</h2>
          <div>
              Id: {resource?.user?._id}<br/>
              Name: {resource?.user?.name}<br/>
              DOB: {resource?.user?.dob}<br/>
              Gender: {resource?.user?.gender}<br/>
              WFH: {resource?.user?.WFH}<br/>
              Designation: {resource?.user?.designation}<br/>
              Hours Worked: {resource?.user?.hours_worked}<br/>
              Hours Available: {resource?.user?.hours_available}<br/>
              Fatigue: {resource?.user?.fatigue}<br/>
          </div>
        </div>
        <div>
          <h2>Assignments</h2>
            <div>
              {resource?.assignment.map((ele)=>
                <div>
                  <div>
                    <h3>Week1</h3>
                    {ele.w1.map((ele)=>
                      <div>
                        Project Id {ele.projectId} <br/>
                        Hours {ele.hours} <br/>
                        <button onClick={()=>{
                          navigate(`/project/${ele.projectId}`)
                          }}>
                          To project
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3>Week2</h3>
                    {ele.w2.map((ele)=>
                      <div>
                        Project Id {ele.projectId} <br/>
                        Hours {ele.hours} <br/>
                        <button onClick={()=>{
                          navigate(`/project/${ele.projectId}`)
                          }}>
                          To project
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3>Week3</h3>
                    {ele.w3.map((ele)=>
                      <div>
                        Project Id {ele.projectId} <br/>
                        Hours {ele.hours} <br/>
                        <button onClick={()=>{
                          navigate(`/project/${ele.projectId}`)
                          }}>
                          To project
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3>Week4</h3>
                    {ele.w4.map((ele)=>
                      <div>
                        Project Id {ele.projectId} <br/>
                        Hours {ele.hours} <br/>
                        <button onClick={()=>{
                          navigate(`/project/${ele.projectId}`)
                          }}>
                          To project
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
        </div>
        
      </div>
    )
}

export default SingleResource