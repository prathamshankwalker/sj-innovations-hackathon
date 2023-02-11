import React,{useEffect,useState} from "react";
import axios from 'axios'
import '../../axios'
import "./AddProject.css";
import { useDispatch } from "react-redux";


function AddProject() {
  const dispatch = useDispatch()
  const [allResources,setResources] = useState(null)

  const getAllResources = async() =>{
    const {data} = await axios.get(`/api/v1/admin/all/resource`)
    
    const arr = data.resources.map((ele)=>{
      return {
        "id":ele._id,
        "name" : ele.name,
        "gender":ele.gender,
        "designation":ele.designation,
        "hours_available":ele.hours_available
      }
    })
    setResources(arr)
    //console.log(allResources)
  }
  
  useEffect(()=>{
    getAllResources()
  },[])

  return (
    <div>
      <h1>Add Project</h1>
      <form></form>
    </div>
  );
}

export default AddProject;
