import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Slices/TodoSlice'
import { useNavigate } from 'react-router-dom'
const Home = () => {


   let data= useRef(null)
 let dispatch=  useDispatch()
 function Add(){
    if(data.current.value==""){
        alert("Error")
    }else{
          dispatch(add(data.current.value))
         alert("Sucessfully added")
    }}
    


  return (
    <div className='text-center min-h-96 bg-slate-400'>
      <input type='text' ref={data} className='border border-black mt-9 w-full p-2  '/>
      <div className="">
      <button onClick={Add} className='bg-red-200 px-3 py-1.5 border border-black rounded-md  mt-2 hover:opacity-80 '>Add</button>
      </div>
    </div>
  )
}


export default Home
