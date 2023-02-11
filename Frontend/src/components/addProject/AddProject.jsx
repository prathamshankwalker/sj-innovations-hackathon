import React,{useEffect,useState} from "react";
import axios from 'axios'
import '../../axios'
import "./AddProject.css";
import {addProject} from '../../actions/project'
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
  }
  
  useEffect(()=>{
    getAllResources()
  },[])

  const submitHandler = (e) =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const title = data.get("p-name")
    const deadline = data.get("deadline")
    const adminId = data.get("p-admin")
    const status = data.get("status")
    const type = data.get("type")
    const desc = data.get("desc")
    const resources = []
    dispatch(addProject(title,deadline,adminId,status,type,desc,resources)) 
  }

  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name='p-name' placeholder='Title' required/>
        <input type="date" name='deadline' placeholder='Deadline' required/>
        <input type="text" name='p-admin' placeholder='Admin Id' required/>
        <select name="status" id="status">
          <option value="confirmed">Confirmed</option>
          <option value="probable">Probable</option>
        </select>
        <select name="type" id="type">
          <option value="billable">Billable</option>
          <option value="non billable">Non Billable</option>
        </select>
        <textarea name="desc" cols="30" rows="6" placeholder="Description"></textarea>
        <button type='submit'>Done</button>
      </form>
    </div>
  );
}

export default AddProject;
