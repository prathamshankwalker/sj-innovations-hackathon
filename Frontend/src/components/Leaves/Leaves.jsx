import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {userLeaves} from '../../actions/superLeave'
import Loader from '../Loader/Loader'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Leaves = () => {
  const dispatch = useDispatch()
  const { loading,userLeaves:leaves} = useSelector((state) => state.superLeaves);

  useEffect(()=>{
    dispatch(userLeaves())
  },[])

  return (
    loading || !leaves ? <Loader/> :
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Resource Id</TableCell>
              <TableCell align="left">Leave Day</TableCell>
              <TableCell align="left">Reason</TableCell>
              <TableCell align="left">Given On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map((ele) => (
              <TableRow
                key={ele._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{ele.resourceId}</TableCell>
                <TableCell align="left">{ele.day}</TableCell>
                <TableCell align="left">{ele.reason}</TableCell>
                <TableCell align="left">{ele.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default Leaves