import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AuthHand } from '../Slices/TodoSlice'

const Navbar = () => {
    const [log,setlog]=useState(false)
   let navigate= useNavigate()
 const dispatch= useDispatch()
  let logout=()=>{
   setlog(!log)
  }
  let LogHandel=()=>{
    dispatch(AuthHand())
     navigate("/Auth")
  }


  return (
    <div className='h-14 w-full bg-black flex justify-between'>
        <div className="">
        <ul className='flex text-white cursor-pointer pl-8 pt-4'>
        <li className='px-4'><Link to="/">Home</Link></li>
        <li className='px-4'><Link to="/about">About </Link></li>
        <li className='px-4'><Link to="/todo">Todos</Link></li>
        <li className='px-4'><Link to="/contact">Contact Us</Link></li>
        
        </ul>
        </div>
        <div className="">
           
            <img src='https://static.vecteezy.com/system/resources/previews/000/437/014/original/logout-vector-icon.jpg' className='h-10 mt-2 mr-2 cursor-pointer rounded-2xl' onClick={LogHandel}/>
            {log?<><button className='list-none mr-2 mt-2 bg-blue-200 text-white p-2 rounded-sm '  >logout</button>
             </>:""}
            
        </div>
     
    </div>
  )
}

export default Navbar
