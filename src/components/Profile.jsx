import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react';


// const[adminProfile,setadminProfile]=useState([]);
// let token=localStorage.getItem(user);

const Profile = () => {
  
const[adminProfile,setadminProfile]=useState([]);
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[role,setRole]=useState('');



useEffect(()=>{
  const userDetails=localStorage.getItem("user");
  const userDetail = JSON.parse(userDetails);
  // console.log("yha pa aagya");
  console.log(userDetail);
  
  // setadminProfile()
  setEmail(userDetail.email);
  console.log(userDetail.email)
  setName(userDetail.name);
  console.log(userDetail.name)
  setRole(userDetail.role);
  console.log("profile section activaatae");
  console.log(localStorage.getItem("user"))
  
},[])


  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
    <h1 className="text-2xl font-bold mb-4">Profile</h1>
    <img
      src="https://via.placeholder.com/200" // Increased image size
      alt="User"
      className="rounded-full mb-6 w-32 h-32" // Adjust width and height
    />
    <div>
      {/* {adminProfile.map((profile)=> */}
       <div className="text-center">
       <p className="mb-2"><strong>Name:{name}</strong></p>
       <p><strong>Email:{email}</strong></p>
       <p><strong>Role:{role}</strong></p>
       </div>
    </div>
  </div>
  </>
  )
}

export default Profile
