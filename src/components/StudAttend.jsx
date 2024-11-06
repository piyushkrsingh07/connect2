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
    <div className='mt-[50px]'>
         <div className='p-10 flex flex-col relative bg-white w-[280px] space-y-2 border 
         hover:scale-105 transition-all duration-200 items-center h-[390px] rounded-3xl mx-auto'>
    
        <img src={data.src} alt="" className=' w-[115px] rounded-full mb-6 h-32' />
  <div className='absolute h-[290px] top-[90px] left-0 w-full bg-black rounded-3xl text-white flex flex-col items-center pt-[100px] z-[-1] space-y-1.5'>
    <div>
        {data.name}

    </div>
    {/* <div>
        {data.rollno}

    </div> */}
   
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
    </div>
    </div>
    </>
  )
}

export default StudAttend
