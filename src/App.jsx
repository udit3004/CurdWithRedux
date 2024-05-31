
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  let AuthData=useSelector(store=>store.Data.Auth)
  let navigate= useNavigate()

// console.log(AuthData)

//  if(AuthData==false){
     

//      }


useEffect(()=>{
  if(AuthData==false){
    navigate("/Auth")
  }

},[])
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
