import React from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {add,remove} from "../redux/slices/AttendanceSlice"

const StudAttend=({data,studIndex}) =>{

    const dispatch=useDispatch();
    const markAbsent=()=>{
        dispatch(remove(data.userId));
        toast.success(`${data.name} mark absent`)

   }
   


  return (
    <>
         <div className='p-10 flex flex-col relative bg-white w-full space-y-2 border 
        rounded-sm hover:scale-105 transition-all duration-200 items-center'>
    
        <img src={data.src} alt="" className=' w-[115px]' />
  
    <div>
        {data.name}

    </div>
    <div>
        {data.rollno}

    </div>
    <div>
        {data.userId}
    </div>
    <div>
        {data.status}
    </div>
    <div>
        {data.date}
    </div>
    {/* <div>
        {data.remark}
    </div> */}
    <div>
    <button onClick={markAbsent} className='bg-green-600 text-white px-2 py-1 rounded-3xl'>Mark Absent</button>




    </div>
    </div>
    </>
  )
}

export default StudAttend
