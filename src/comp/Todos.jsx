import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import List from './List'
import { clear } from '../Slices/TodoSlice'
import Empty from './Empty'



const Todos = () => {
    const dispatch=  useDispatch()
    let list= useSelector((store)=>store.Data.arr)
 
    const clearall=()=>{
        dispatch(clear())
    }
  return list.length==0?<Empty/>: (
    <div className='min-h-96'>
         {list.length>0 && <button className='bg-blue-400 mt-4 ml-3 p-2' onClick={clearall}>clear All</button> }
        {list.map((val,index)=>{
           return <List data={val} i={index} key={index} />
        })}
    </div>
  )
}

export default Todos
