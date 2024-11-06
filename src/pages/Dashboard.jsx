import React,{ useContext,useEffect } from 'react'
 import {useState} from 'react'
import StudentCard from '../components/StudentCard'
import Sidebar from '../components/Sidebar'
import { openContext } from '../context/context'
import { Input } from 'postcss'






const Dashboard = ({isOpen}) => {
  const API_URL="https://project-backend-mbiw.vercel.app/api/attendance/user-attendance";

  const value=useContext(openContext)
  const[myStudent,setmyStudent]=useState([]);

  // new  code
//   async function getNewAccesssToken(refreshToken) {
//     const res = await fetch('https://project-backend-mbiw.vercel.app/api/auth/token', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ refreshToken }),
//     });
//     const data = await res.json();

//     return data.accessToken;
//     }








//   async function fetchStudentData(){

//     const token = localStorage.getItem('token'); // Initial access token
//     console.log(token,"helllllooooooooo");
    
//     //  const newToken = JSON.parse(token);
//         try {

//           console.log("api url pr aagya",token);
          
//             let res = await fetch(API_URL,{
//                 headers: {
//                     'Authorization': `Bearer ${token}`, // Include access token in Authorization header
//                 },
//             });
//             console.log(res);
//             console.log("dekh le response")
//             // Check if the token has expired (e.g., 401 Unauthorized)
//             if (res.status === 401) {
//                 // Store the new access token
//                 // localStorage.setItem('token', token);

//                 // Retry the request with the new access token
//                 // res = await fetch(API_URL, {
//                 //     headers: {
//                 //         'Authorization': `Bearer ${token}`,
//                 //     },
//                 // });
//                 console.log("yha aa gya ")
//             }

//             if (!res.ok) {
//                 throw new Error("Authorization failed or other error");
//  }
// // const res=await fetch(API_URL);
// const data=await res.json();
// console.log(data)
// // setmyStudent(data);
// setmyStudent(Array.isArray(data) ? data : []);

//      }
//      catch(error){
//       console.log("error in attendance");
//       setmyStudent([]);
//      }

//     }

//     useEffect(()=>{
//       fetchStudentData();
//     },[])

async function fetchStudentData() {
  const token = localStorage.getItem('token');
  
  if (!token) {
      console.error("No token found in localStorage");
      return;
  }
  
  try {
      console.log("Making request to API:", API_URL, "with token:", token);
      
      let res = await fetch(API_URL, {
          mode: 'cors', 
          headers: {
              'Authorization': `Bearer ${token}`,
           
          },
      });
      
   
      console.log("Response status:", res.status);
      console.log("Response status text:", res.statusText);

    
      if (res.status === 401) {
          console.log("Token expired or invalid. Please re-authenticate.");
          return;
      }

      if (!res.ok) {
          throw new Error("Authorization failed or other error");
      }

      const data = await res.json();
      setmyStudent(Array.isArray(data) ? data : []);

  } catch (error) {
      console.error("Error fetching attendance:", error.message);
      setmyStudent([]);
  }
}

useEffect(() => {
  fetchStudentData();
  console.log(fetchStudentData())
}, []);


     


  

//     {
//       src:'https://via.placeholder.com/200',
//       name:'Piyush Kumar',
//      rollno:1,
//      userId:23153101,
//     //  date:03-11-2024,
//     date: new Date().toLocaleDateString(),
//      status:'Present',
//     //  remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>
//     },
//     {
//       src:'https://via.placeholder.com/200',
//       name:'Ankush Sharma',
//       rollno:2,
//       userId:23153102,
//       date: new Date().toLocaleDateString(),
//       status:'Present',
//       // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>

//     },
//     {
//       src:"https://via.placeholder.com/200",// Increased image size
      
//       name:'Anjali Gupta',
//       rollno:3,
//       userId:23153103,
//       date: new Date().toLocaleDateString(),
//       status:'Present',
//       // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>
     
//     },
//     {
//       src:"https://via.placeholder.com/200",
//         name:'Ichchha Gupta',
//         rollno:4,
//         userId:23153104,
//         date: new Date().toLocaleDateString(),
//         status:'Present',
//         // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>



        

//     }
//     ,  {
//       src:"https://via.placeholder.com/200",
//       name:'Vansh Atrey',
//       rollno:5,
//       userId:23153105,
//       date: new Date().toLocaleDateString(),
//       status:'Present',
//       // remark:<input type="text" className='bg-black px-1 py-1 rounded-sm text-white'></input>




//   },
//   {
//     src:"https://via.placeholder.com/200",
//     name:'Saksham Rajput',
//     rollno:6,
//     userId:23153106,
//     date: new Date().toLocaleDateString(),
//     status:'Present',
//   //  remark:<><label htmlFor="remark">Remark:</label><input type="text" className='bg-black px-1 py-1 rounded-sm text-white' id="remark"></input></>




// },

     
  // ]);
//   async function fetchStudentData(){

// try{
// const res=await fetch(API_URL);
// const data=await res.json();

// setmyStudent(data);
// }
// catch(error){
// console.log("error occured");
// setmyStudent([]);

// }


// }

// useEffect(()=>{
//   fetchStudentData();
// },[])






  



  return (
    <div className=' mt-[-50px] h-screen mb-10 '>
      {/* <div className='bg-black'> */}
    
    <div className={`grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-auto-rows gap-y-10 gap-x-4 relative mt-[50px] min-h-[80vh] transition-all duration-300 ${value.isOpen ? 'ml-[300px]' : 'ml-[40px]'} pt-10 `}  >
      

      {myStudent.map((data)=>(
        
        <StudentCard key={data.userId} data={data}/>
      ))}
    </div>
    </div>
    // </div>
    
  );
};

export default Dashboard
