import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {add,remove} from "../redux/slices/AttendanceSlice"
// import {myStudent} from "../pages/Dashboard"

const StudentCard = ({data}) => {

    const {Attendance}=useSelector((state)=>(state));
    
    const dispatch=useDispatch();

    const markPresent=()=>{
         dispatch(add(data));
         toast.success(`${data.name} marked present`);



    }

    const markAbsent=()=>{
         dispatch(remove(data.userId));
         toast.success(`${data.name} mark absent`)

    }
    // const safeAttendence = Attendence || [];
    

  return (
        <div >
          
        <div className='p-10 flex flex-col relative w-full space-y-2 border 
        rounded-sm hover:scale-105 transition-all duration-200 items-center h-[390px] text-white '>
    
        <img src={data.src} alt="" className=' w-[115px] rounded-full mb-6 h-32' />
     
    <div>
       Name: {data.name}

    </div>
    <div>
        Roll no:{data.rollno}

    </div>
    <div>
        UserId:{data.userId}
    </div>
    <div>
        Date:{data.date}
    </div>
    {/* <div>
        {data.remark}
    </div> */}
  
    { 
         Array.isArray(Attendance) && Attendance.some((p)=>p.userId==data.userId)?
    (
        <button onClick={markAbsent} className='bg-green-600 text-white px-2 py-1 rounded-3xl'>Mark Absent</button>
    ):
    
(

<button onClick={markPresent} className='bg-green-600 text-white px-2 py-1 rounded-3xl'>
   Mark {data.status}
</button>

)
    }
    </div>
    </div>

  )
}

export default StudentCard
