import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Resources.css";
import { Button } from "@mui/material";
import { TextField, Autocomplete } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../../axios'
import Loader from "../Loader/Loader";

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous",
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">
//           <Button variant="outlined">Add To Project</Button>
//         </TableCell>
//         <TableCell align="right">
//           <Button variant="outlined">Allow Leave</Button>
//         </TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Project Allocated
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Project</TableCell>
//                     <TableCell align="right">Hours</TableCell>
//                     {/* <TableCell align="right">Total price ($)</TableCell> */}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       {/* <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell> */}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// const rows = [
//   createData("Frozen yoghurt"),
//   createData("Ice cream sandwich"),
//   createData("Eclair"),
//   createData("Cupcake"),
//   createData("Gingerbread"),
// ];

// const row = [
//   { label: "Frozen yoghurt" },
//   { label: "Ice cream sandwich" },
//   { label: "Eclair" },
//   { label: "Cupcake" },
//   { label: "Gingerbread" },
// ];
// const options = ["The Godfather", "Pulp Fiction"];



export default function CollapsibleTable() {
  
  const [allResources,setResources] = React.useState(null)
  const navigate = useNavigate()

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
  
  React.useEffect(()=>{
    getAllResources()
    console.log(allResources)    
  },[])

  return (
    !allResources ? <Loader/> :
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Resource Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Hours Available</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allResources.map((ele) => (
              <TableRow
                key={ele.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ele.id}
                </TableCell>
                <TableCell align="right">{ele.name}</TableCell>
                <TableCell align="right">{ele.gender}</TableCell>
                <TableCell align="right">{ele.designation}</TableCell>
                <TableCell align="right">{ele.hours_available}</TableCell>
                <TableCell align="right"><Button onClick={()=>{
                  navigate(`/leave/${ele.id}`)
                }}>Assign Leave</Button></TableCell>
                <TableCell align="right"><Button>Assign Project</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
