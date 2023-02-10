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
  //const {user,loading} = useSelector((state)=>state.user);

  return (
    <div className="sidebar">
        {/* <div>
          <img src={logo} alt="logo"/>
        </div> */}
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
        {/* {
          user?.isAdmin === 'true' &&  
          <Link to="/add-user" onClick={()=>setTab("/add-user")}>
            { tab==="/add-user"?<PersonAdd style={{color:'black'}}/>:<PersonAddOutlined/>}
            <Typography variant='h6'>Add User</Typography>
          </Link>
        }
        {
          user?.isAdmin === 'true' &&
          <Link to="/all-users" onClick={()=>setTab("/all-users")}>
            { tab==="/all-users"?<Group style={{color:'black'}}/>:<GroupOutlined/>}
            <Typography variant='h6'>All User</Typography>
          </Link>
        } */}
    </div>
  )
}

export default Sidebar