
import { useState } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Projects from "./pages/projects"
import Tasks from "./pages/tasks"
import Calendar from "./pages/calendar";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Team from "./pages/team";
import Register from "./pages/register";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/tasks" element={<Tasks/>} />
      <Route path="/calendar" element={<Calendar/>} />
      <Route path="/clients" element={<Clients/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;