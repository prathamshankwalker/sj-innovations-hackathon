import "./App.css";
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resources from "./components/Resources/Resources";
import Status from "./components/Status/Status";
import Leaves from "./components/Leaves/Leaves";
import SignIn from "./components/SIgnIn/SignIn";
import AddProject from "./components/addProject/AddProject";
import {loadUser} from './actions/user'
function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state)=>state.user);

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add-project" element={isAuthenticated?<AddProject />:<SignIn/>}></Route>
        <Route path="/" element={isAuthenticated?<Projects/>:<SignIn/>}></Route>
        <Route path="/resources" element={isAuthenticated?<Resources/>:<SignIn/>}></Route>
        <Route path="/projects" element={isAuthenticated?<Projects/>:<SignIn/>}></Route>
        <Route path="/status" element={isAuthenticated?<Status/>:<SignIn/>}></Route>
        <Route path="/leaves" element={isAuthenticated?<Leaves/>:<SignIn/>}></Route>
      </Routes>
    </>
  );
}

export default App;
