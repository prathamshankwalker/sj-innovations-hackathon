import React,{useEffect} from 'react'
import "./AssignLeave.css"
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { Button } from '@mui/material'
import axios from 'axios'
import '../../axios'

const AssignLeave = () => {
    const {id} = useParams()

    const submitHandler = async(e) =>{
        e.preventDefault()
        const form_data = new FormData(e.currentTarget);
        const day = form_data.get("day")
        const reason = form_data.get("reason")
        const resourceId = id
        const {data} = await axios.post("/api/v1/admin/assign-leave",
        {day,reason,resourceId},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(data)
    }

    return (
        <div>
            <h1>Assign Leave</h1>
            <form onSubmit={submitHandler}> 
                <h3>Resource Id : {id}</h3>
                <input type="date" placeholder='Date' name="day" required/>
                <input type="text" placeholder='Reason' name="reason" required/>
                <Button variant="contained" type="submit">Done</Button>
            </form>
        </div>
    )
}

export default AssignLeave