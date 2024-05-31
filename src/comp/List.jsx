import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Deleted, updateData} from '../Slices/TodoSlice'

const List = ({data,i}) => {
    const [update,setUpdate]=useState(false)
    const [updatevalue,setUpdateValue]=useState()
  const dispatch=  useDispatch()
    const Delete=()=>{
        dispatch(Deleted(data))    
    }
    function Update(){
        if(update){
        dispatch(updateData({newdata:updatevalue,index:i}))
        setUpdate(!update)
        }else{
            setUpdate(!update)
        setUpdateValue(data)

        }
       
    }
  return (<>
   
    <div className='text-center mt-3 uppercase border border-black py-2'> 
    {!update ?data:<input type='text' className='border border-black' value={updatevalue} onChange={(e)=>setUpdateValue(e.target.value)} />}
    <button className='bg-red-500 text-black p-1 ml-3 ' onClick={Delete}>delete</button>
    <button className='bg-green-300 p-1 ml-3 ' onClick={Update}>update</button>

    </div>
    </>
  )
} 

export default List
