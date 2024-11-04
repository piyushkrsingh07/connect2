import React,{ useContext } from 'react'
import {useState} from 'react'
import StudentCard from '../components/StudentCard'
import Sidebar from '../components/Sidebar'
import { openContext } from '../context/context'
import { Input } from 'postcss'

const Dashboard = ({isOpen}) => {

  const value=useContext(openContext)
  const[myStudent,setmyStudent]=useState([

    {
      src:'https://ucarecdn.com/f6ceec67-948c-4086-81a4-2d949983d1e2/-/preview/125x125/',
      name:'Piyush Kumar',
     rollno:1,
     userId:23153101,
    //  date:03-11-2024,
    date: new Date().toLocaleDateString(),
     status:'Present',
    //  remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>
    },
    {
      src:'https://ucarecdn.com/139e3bc1-201c-43cc-bd59-3d308f1c973a/-/preview/100x125/',
      name:'Ankush Sharma',
      rollno:2,
      userId:23153102,
      date: new Date().toLocaleDateString(),
      status:'Present',
      // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>

    },
    {
      src:"https://via.placeholder.com/200",// Increased image size
      
      name:'John Doe',
      rollno:3,
      userId:23153103,
      date: new Date().toLocaleDateString(),
      status:'Present',
      // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>
     
    },
    {
      src:"https://via.placeholder.com/200",
        name:'Steve Jobs',
        rollno:4,
        userId:23153104,
        date: new Date().toLocaleDateString(),
        status:'Present',
        // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>



        

    }
    ,  {
      src:"https://via.placeholder.com/200",
      name:'Elon Musk',
      rollno:5,
      userId:23153105,
      date: new Date().toLocaleDateString(),
      status:'Present',
      // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>




  },
  {
    src:"https://via.placeholder.com/200",
    name:'Mark Zukerberg',
    rollno:6,
    userId:23153106,
    date: new Date().toLocaleDateString(),
    status:'Present',
  //  remark:<><label htmlFor="remark">Remark:</label><input type="text" className='bg-black px-1 py-1 rounded-sm text-white' id="remark"></input></>




},

     
  ]);



  return (
    <div className='bg-[url(https://ucarecdn.com/0966f585-4b40-4005-900c-e00fafd88d43/-/preview/626x417/)] mt-[-50px] h-[900px]'>
      {/* <div className='bg-black'> */}
    
    <div className={`grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-4 relative mt-[50px] min-h-[80vh] transition-all duration-300 ${value.isOpen ? 'ml-[300px]' : 'ml-[40px]'} pt-10 bg-black`}  >
      

      {myStudent.map((data)=>(
        
        <StudentCard key={data.userId} data={data}/>
      ))}
    </div>
    </div>
    // </div>
    
  )
}

export default Dashboard
