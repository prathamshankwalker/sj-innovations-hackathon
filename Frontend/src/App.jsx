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
import AddResource from "./components/AddResource/AddResource"
import AllProjects from "./components/allProjects/AllProjects"
import AllAdmins from "./components/allAdmins/AllAdmins"
import Activity from "./components/Activity/Activity"
import SingleProject from "./components/singleProject/SingleProject";
import SingleResource from "./components/singleResource/singleResource";
import {loadUser} from './actions/user'
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated,loading,user} = useSelector((state)=>state.user);

  if (user)
    console.log(user.isSuperAdmin,isAuthenticated)

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return (
    loading?<Loader/>:
    <>
      <Navbar />
      <Routes>
         {/*Admin*/}
        <Route path="/resources" element={isAuthenticated?<Resources/>:<SignIn/>}></Route>
        <Route path="/projects" element={isAuthenticated?<Projects/>:<SignIn/>}></Route>
        <Route path="/status" element={isAuthenticated?<Status/>:<SignIn/>}></Route>
        <Route path="/leaves" element={isAuthenticated?<Leaves/>:<SignIn/>}></Route>
        
        <Route path="/project/:id" element={isAuthenticated?<SingleProject/>:<SignIn/>}></Route>
        <Route path="/resource/:id" element={isAuthenticated?<SingleResource/>:<SignIn/>}></Route>

        {/*Super Admin*/}
        <Route path="/" element={isAuthenticated? user.isSuperAdmin ? <AllProjects/>:<Projects/>:<SignIn/>}></Route>
        <Route path="/add-project" element={isAuthenticated?<AddProject/>:<SignIn/>}></Route>
        <Route path="/add-resource" element={isAuthenticated?<AddResource/>:<SignIn/>}></Route>
        <Route path="/activity" element={isAuthenticated?<Activity/>:<SignIn/>}></Route>
        <Route path="/admins" element={isAuthenticated?<AllAdmins/>:<SignIn/>}></Route>
      </Routes>
    </>
  );
}

export default App;
