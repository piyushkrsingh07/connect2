import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
const Login = (props) => {
  const [FormData, setFormData] = useState({ username: "", password: "", email: "" })
  const [showPassword, setshowPassword] = useState(true)

  let setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();



  //   let submitHandler=async(event)=>{

  //         event.preventDefault();
  //         try {


  //       let response=await fetch(`https://project-backend-mbiw.vercel.app/api/auth/signin`,{
  //         method:"POST",
  //         headers:{
  //           "Content-Type":"application/json",
  //         },
  //         body:JSON.stringify(FormData),
  //       })
  //      const data=await response.json();




  //       if (response.ok) {

  //         let token = data.token; 
  //         if (token) {
  //           console.log(token);
  //           localStorage.setItem('authToken', token);
  //         } else {
  //           console.error('Token is undefined');
  //         }

  //         setIsLoggedIn(true);
  //         toast.success("Logged In Successfully");
  //         navigate("/home");
  //     } else {

  //         toast.error(data.error||"Password Or Email is incorrect");
  //     }
  // } 





  //      catch (error) {
  //           console.log("signin",error)
  //     }


  //     }

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(FormData);

      if (data.accessToken && data.refreshToken) {
        // Store tokens in localStorage
        console.log(data.user);
        console.log("heelo");

        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('user', JSON.stringify(data.user));

        setIsLoggedIn(true);
        toast.success("Logged In Successfully");
        navigate("/home");
      } else {
        toast.error("Token is undefined or login failed");
      }
    } catch (error) {
      console.log("signin error", error);
      toast.error("Password Or Email is incorrect");
    }
  };

  async function loginUser(credentials) {
    const res = await fetch('https://project-backend-mbiw.vercel.app/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();

    console.log(data)

    if (!res.ok) {
      throw new Error(data.error || "Login failed");
    }

    return data;
  }

  function changeHandler(e) {
    const { name, value, type } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }
  return (
    <div className='flex bg-black overflow-x-hidden h-screen overflow-y-hidden'>





      {/* <h1>WELCOME TO YOUR ACCOUNT</h1> */}
      <div className='flex flex-col gap-y-5 ml-[110px] pl-[40px] mt-[50px] bg-gray-500 pr-[20px] rounded-md h-[455px] mx-auto ' >
        <h1 className='text-white mt-5 font-bold'>WELCOME TO YOUR ACCOUNT</h1>
        <form onSubmit={submitHandler} className='text-white'>
          <label htmlFor="username">Username<sup className='text-red-700'>*</sup></label>
          <br />
          <input

            type="text"
            placeholder="Enter Your UserName"
            name="username"
            id="username"
            value={FormData.username}
            onChange={changeHandler}
            className='bg-black px-1 py-1 rounded-sm'
          />
          <br />
          <br />
          <label htmlFor="email">Email<sup className='text-red-700'>*</sup></label>
          <br />
          <input type="email"
            required
            placeholder="Enter your email id "
            name="email"
            id="name"
            value={FormData.email}
            onChange={changeHandler}
            className=' bg-black px-1 py-1 rounded-sm' />
          <br />
          <br />
          <label htmlFor="password">Password<sup className='text-red-700'>*</sup></label>
          <div className='flex'>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              placeholder="Enter Your Password"
              id="password"
              name="password"
              value={FormData.password}
              onChange={changeHandler}
              className='bg-black px-1 py-1 rounded-sm'

            />
            <span className='ml-1 mt-2' onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? (<div><FaEye /></div>) : (<div><FaEyeSlash /> </div>)}
            </span>
          </div>
          <br />

          <button className='text-black bg-[#FFD700] px-[70px] rounded-3xl py-1'>Sign In</button>
          <br />
          <div className='ml-[80px]'>OR</div>


          <button className='bg-black w-[190px] pl-2 rounded-3xl py-1 '><span className='flex items-center  gap-3 pb-1'><FcGoogle className='mt-1' />Sign in with Google</span></button>


        </form>
      </div>

      <div className='ml-[100px]'>
        <img src="https://ucarecdn.com/55cda5d6-223c-41b8-9876-c21bf4ef2b15/-/preview/648x656/" alt="" className='w-[1000px] h-[550px]' />
      </div>
    </div>
  )
}

export default Login
