import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from '../pages/Dashboard';
import { openContext } from '../context/context';


const Sidebar = () => {
    // const [isOpen, setIsOpen] = useState(false);
   const value=useContext(openContext)
    
    
    const toggleSidebar = () => {
      value.setIsOpen(prev => !prev);
     
    };
    return (
      
      <>
      {/* <Dashboard isOpen={isOpen}/> */}
   
        
        <div>
          <button 
            onClick={toggleSidebar} 
            className="text-white bg-black p-3"
          >
            
            <svg
              className="w-8 h-11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
    
          
          <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${value.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed left-0 top-0 w-64 bg-white p-4 transform transition-transform duration-300 ${value.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <button 
                onClick={toggleSidebar} 
                className="text-black underline mb-4">
                Close
              </button>
              
        <div className="  h-full ">
         
          <ul className="space-y-3">
            <li>
              <Link className=" text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/fees">Fees</Link>
            </li>
            
            <li>
              <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/notes">Notes</Link>
            </li>
            <li>
              <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl"  to="/profile">Profile</Link>
            </li>
            <li>
              <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/assignment">Assignment</Link>
            </li>
            <li>
              <Link className="text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/examination">Examination</Link>
            </li>
              <li>
              <Link className="text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/hostel">Hostel</Link>
            </li>
            <li>
              <Link className="text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link className="text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/placement">Placement</Link>
            </li>
              <li>
              <Link className="text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/open-elective">Open Elective</Link>
            </li>
            <li>
              <Link className=" text-xl block text-black pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl"  to="/projects">Projects</Link>
            </li>
            <li>
              <Link className=" text-xl block text-black  pb-1 pl-2 hover:bg-black hover:text-white hover:rounded-xl" to="/statistics">Statistics</Link>
            </li>
          </ul>
        </div>
            </div>
          </div>
        </div>
        
        
        </>
      );
    };


    


export default Sidebar
