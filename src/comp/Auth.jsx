import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthHand } from '../Slices/TodoSlice'


const Auth = () => {
   const [signUp,setSignUp]= useState(false)
   const [name,setName]=useState()
   const [email,setEmail]=useState()
   const [password,setPassword]=useState()
 let dispatch=  useDispatch()
   
 let navigate=  useNavigate()
    const Toggle=()=>{
    setSignUp(!signUp)
    }

    const manageAuth=(e)=>{
        e.preventDefault()
        if(signUp){
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    setName("")
    setEmail("")
   setPassword("")
    setSignUp(!signUp)
        }
        if(!signUp){
          const getemail=  localStorage.getItem("email")
          const getpassword =localStorage.getItem("password")
          if(getemail===email && getpassword==password){

            dispatch(AuthHand())
          navigate("/")
          }
          else{
            alert("Inavlid")
          }

        }
    }

  return  (
    <div className="bg-gray-800 h-full">
    <div className='pt-8 text-center w-1/3 mx-auto my-6 bg-gray-400 rounded-md  '>
        <h1 className='text-3xl underline'>
           {!signUp? "Sign In":"Sign Up"}
        </h1>
        <form className='h-72 ' >
        {signUp &&   <div className="mt-6">
        <label htmlFor='email'>Name:  </label>
        <input type='text' id='name' placeholder='Enter your name' required className='border border-black p-1' onChange={(e)=>setName(e.target.value)} value={name} />
        </div>}
            <div className="mt-6">
        <label htmlFor='email'>Email:  </label>
        <input type='text' id='email' placeholder='Enter your email' required className='border border-black p-1' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        
        <div className="mt-6 pr-7">
        <label htmlFor='Password'>Password:  </label>
        <input type='text' id='password' placeholder='Enter your Passowrd'  required className='border border-black p-1' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
        <button className='bg-blue-700 text-white mx-2 my-8 p-1 rounded-md' onClick={manageAuth}>Submit</button>
        <h3 className='text-lg cursor-pointer' onClick={Toggle}>{!signUp?"New User ? Signup":"Login here"}</h3>
      </form>
    </div>
    </div>
  )
}

export default Auth
