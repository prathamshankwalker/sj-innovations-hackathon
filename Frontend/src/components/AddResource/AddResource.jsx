import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addResource} from '../../actions/resource'
import './AddResource.css'
import Loader from '../Loader/Loader'

const AddResource = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.resource);
  
  const submitHandler = (e) =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const name = data.get("r-name")
    const dob = data.get("dob")
    const gender = data.get("gender")
    const WFH = data.get("wfh")
    const designation = data.get("designation")
    const fatigue = data.get("fatigue")
    dispatch(addResource(name,dob,gender,WFH,designation,fatigue))
  }

  return (
    loading ? <Loader/> :
    <div>
      <h1>Add Resource</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name='r-name' placeholder='name' required/>
        <input type="date" name='dob' placeholder='DOB' required/>
        <input type="text" name='gender' placeholder='gender' required/>
        <input type="text" name='wfh' placeholder='WFH' required/>
        <input type="text" name='designation' placeholder='designation' required/>
        <input type="number" name='fatigue' placeholder='fatigue' required/>
        <button type='submit'>Done</button>
      </form>
    </div>
  )
}

export default AddResource