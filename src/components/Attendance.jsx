import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StudAttend from './StudAttend';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Attendance = () => {


  const {Attendance}=useSelector((state)=>(state));

  let submitHandler=async(event)=>{

    event.preventDefault();
    try {
      
   const token=localStorage.getItem('authToken');
  let response=await fetch(`https://project-backend-mbiw.vercel.app/api/attendance/update`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      'Authorization': `Bearer ${token}`
    },
    body:JSON.stringify(Attendance),
  })
  const data=await response.json();


  Attendance(prev=>[...prev,data])


 
 if (response.ok) {
       

  toast.success("API OK");
 
} else {
 if(response.status===401){
  toast.error("Password Or Email is incorrect");
  console.log("Authorisation Failed")
 }
}
} 
     

// console.log("Response status:", response.status);
// console.log("Response body:", await response.text());

// if (response.ok) {
//     const data = await response.json();
//     Attendance(prev => [...prev, data]);
//     toast.success("API OK");
// } else {
//     toast.error("Failed to update attendance. Check server logs for more details.");
// }
// }
       
    

      
catch (error) {
     console.log("attendance",error)
}


}



  return (

    <div>
     
    {
      Attendance.length>0?
      (<div>
           
      <div>
        {
          
           Attendance.map((data,index)=>{
           return <StudAttend key={data.userId} data={data} studIndex={index}/>



           })

           

        }
         {/* <button className='text-black bg-[#FFD700] px-[70px] rounded-3xl py-1'>Submit Data</button>
         </form> */}
         <div className='pt-[50px] ml-[200px]'>
 <button onClick={submitHandler} className='text-black bg-[#FFD700] px-[70px] rounded-3xl py-1 '>Submit Data</button> 
        </div>

      </div>

      <div>
         <div>CLASS SUMMARY</div>
         <div>Total Strength:{Attendance.length}</div>




      </div>


      </div>





      ):
      (
        <div>
      <div className='flex flex-col items-center justify-center space-y-5'>
        <h1 className='font-Nunito font-bold'>NO STUDENT PRESENT</h1>
         <NavLink to={"/dashboard"}>
         <button className='bg-green-400 text-white rounded-3xl px-3 py-1 '>TAKE ATTENDENCE</button>
         
         </NavLink>

        </div>
       </div>

      )
    }
  
    </div>
    
  )
}

export default Attendance
