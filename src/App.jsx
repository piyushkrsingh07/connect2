import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import Attendance from './components/Attendance'
import Timetable from './components/Timetable'
import Profile from './components/Profile'
import {openContext} from './context/context'


import {Route,Routes} from "react-router-dom"

function App() {

  const[IsLoggedIn,setIsLoggedIn]=useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <openContext.Provider value={{isOpen,setIsOpen}}>
    <div>
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard setIsLoggedIn={setIsLoggedIn}/>} />

              <Route path="/Attendance" element={<Attendance setIsLoggedIn={setIsLoggedIn}/>} />
              <Route path="/Timetable" element={<Timetable setIsLoggedIn={setIsLoggedIn}/>} />
              <Route path="/Profile" element={<Profile setIsLoggedIn={setIsLoggedIn}/>} />



      </Routes>

    </div>
    </openContext.Provider>
    </>
  )
}

export default App
