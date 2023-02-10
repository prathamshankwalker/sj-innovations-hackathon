import React,{useState} from 'react'
import './Sidebar.css'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {Typography} from "@mui/material"
import {Dataset,DatasetOutlined,AddBox,AddBoxOutlined,
  Assessment,AssessmentOutlined,PostAdd,PostAddOutlined,
  PersonAdd,Group,GroupOutlined, PersonAddOutlined} from '@mui/icons-material'
import Loader from '../Loader/Loader'

const Sidebar = () => {
  const [tab,setTab] = useState(window.location.pathname)
  const {user,loading} = useSelector((state)=>state.user);

  return (
    user.isSuperAdmin ? (
      <div className="sidebar">
        <Link to="/" onClick={()=>setTab("/")}>
          { tab==="/"?<Dataset style={{color:'black'}}/>:<DatasetOutlined/>}
          <Typography variant='h6'>Home</Typography>
        </Link>
        <Link to="/add-resource" onClick={()=>setTab("/add-resource")}>
          { tab==="/add-resource"?<AddBox style={{color:'black'}}/>:<AddBoxOutlined/>}
          <Typography variant='h6'>Resources</Typography>
        </Link>
        <Link to="/add-project" onClick={()=>setTab("/add-project")}>
          { tab==="/add-project"?<Assessment style={{color:'black'}}/>:<AssessmentOutlined/>}
          <Typography variant='h6'>Projects</Typography>
        </Link>
        <Link to="/activity" onClick={()=>setTab("/activity")}>
          { tab==="/activity"?<PostAdd style={{color:'black'}}/>:<PostAddOutlined/>}
          <Typography variant='h6'>Activity</Typography>
        </Link>
    </div>
    ) :(
      <div className="sidebar">
        <Link to="/" onClick={()=>setTab("/")}>
          { tab==="/"?<Dataset style={{color:'black'}}/>:<DatasetOutlined/>}
          <Typography variant='h6'>Projects</Typography>
        </Link>
        <Link to="/resources" onClick={()=>setTab("/resources")}>
          { tab==="/resources"?<AddBox style={{color:'black'}}/>:<AddBoxOutlined/>}
          <Typography variant='h6'>Resources</Typography>
        </Link>
        <Link to="/status" onClick={()=>setTab("/status")}>
          { tab==="/status"?<Assessment style={{color:'black'}}/>:<AssessmentOutlined/>}
          <Typography variant='h6'>Status</Typography>
        </Link>
        <Link to="/leaves" onClick={()=>setTab("/leaves")}>
          { tab==="/leaves"?<PostAdd style={{color:'black'}}/>:<PostAddOutlined/>}
          <Typography variant='h6'>Leaves</Typography>
        </Link>
    </div>
    )
    
  )
}

export default Sidebar