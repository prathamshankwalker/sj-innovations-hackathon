import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resources from "./components/Resources/Resources";
import Status from "./components/Status/Status";
import Leaves from "./components/Leaves/Leaves";
import SignIn from "./components/SIgnIn/SignIn";
import AddProject from "./components/addProject/AddProject";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/add-project" element={<AddProject />}></Route>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/status" element={<Status />}></Route>
        <Route path="/leaves" element={<Leaves />}></Route>
      </Routes>
    </div>
  );
}

export default App;
