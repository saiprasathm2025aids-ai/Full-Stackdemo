import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Project from './pages/projects';
import Tasks from '../src/pages/tasks';
import Calender from "./pages/calender";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";
import Clients from "./pages/cilents";
import Team from "./pages/team";

function App() {
  
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/cilents" element={<Clients/>}/>
        <Route path="/team" element={<Team/>}/>

      </Routes>
    </BrowserRouter>
   
   );
}

export default App;