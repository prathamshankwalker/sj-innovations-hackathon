import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {getAllProjects} from '../../actions/project'
import {useNavigate} from 'react-router-dom'
import Loader from '../Loader/Loader'
import "./AllProjects.css"

const AllProjects = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getAllProjects())
  },[dispatch])

  const {projects,loading} = useSelector((state)=>state.project);

  return (
    loading || !projects? <Loader/> :
    <div>
      <h1>All projects</h1>
      <div style={{display:"flex",flexDirection:"row",columnGap:"20px",alignItems:"flex-start"}}> 
        {projects.map((ele)=>
          <div style={{display:"flex",flexDirection:"column"}}>
            <h3>{ele.adminId}</h3>
            <h3>{ele.title}</h3>
            <h3>{ele.status}</h3>
            <h3>{ele.deadline.slice(0,10)}</h3>
            <button onClick={()=>{
                navigate(`/project/${ele._id}`)
              }}>
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProjects