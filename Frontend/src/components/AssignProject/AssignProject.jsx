import React from 'react'
import "./AssignProject.css"
import {useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Button } from '@mui/material'
import {assignResource} from '../../actions/resource'
import Loader from '../Loader/Loader'

const AssignProject = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { loading} = useSelector((state) => state.project);

    const submitHandler = async(e) =>{
        e.preventDefault()
        const form_data = new FormData(e.currentTarget);
        const projectId = form_data.get("pid")
        const hours = form_data.get("hours")
        const week = form_data.get("week")
        dispatch(assignResource(id,projectId,week,hours))
    }

    return (
        loading ? <Loader/> :
        <div>
            <h1>Assign Project</h1>
            <form onSubmit={submitHandler}>
                <h3>Resource Id : {id}</h3>
                <input type="text" placeholder='Project Id' name="pid" required/>
                <select name="week" id="week" required>
                    <option value="week1">Week 1</option>
                    <option value="week2">Week 2</option>
                    <option value="week3">Week 3</option>
                    <option value="week4">Week 4</option>
                </select>
                <input type="number" placeholder='Hours' name="hours" required/>
                <Button variant="contained" type="submit">Done</Button>
            </form>
        </div>
    )
}

export default AssignProject