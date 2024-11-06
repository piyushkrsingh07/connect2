import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Welcome from "./pages/welcome"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import Attendance from './components/Attendance'
import Timetable from './components/Timetable'
import Profile from './components/Profile'
import {openContext} from './context/context'
import Home from './pages/Home'


import {Route,Routes} from "react-router-dom"


const getCurrentUser = () => {  
  const token = localStorage.getItem("token");
  // const user = localStorage.getItem("user")
  if (token) {
    return true;
  }
  return false;
};

const getUserRole = () => {
  const userDetails=localStorage.getItem("user");
  const userDetail = JSON.parse(userDetails);
 console.log("yha pa aagya app.jsx m ");
  // console.log(userDetail.role);
  return userDetail ? userDetail.role : "user";
}

function App() {

  const[IsLoggedIn,setIsLoggedIn]=useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const userRole = getUserRole();
  console.log(userRole)


  return (
    <>
    <openContext.Provider value={{isOpen,setIsOpen}}>
    <div>
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

      {/* {getCurrentUser() ? (
          <Route path="/" element={<Welcome/>}>
            {userRole !== "admin" && (
              <>
                {/* <Route path="/" element={<Dashboard />} /> */}
                {/* <Route path="/home" element={<Home/>} /> */}
  
              {/* </> */}
            {/* )} */} 
{/* 
            <Route path="/Attendance" element={<Attendance setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/" element={<Dashboard />} />
        <Route path="/Timetable" element={<Timetable setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/Profile" element={<Profile setIsLoggedIn={setIsLoggedIn}/>} />
        
          </Route>
        ) : (
          <>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
          </>
        )}  */}


         <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<Home/>} />
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
