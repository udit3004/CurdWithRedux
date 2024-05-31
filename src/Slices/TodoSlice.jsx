import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  arr:[],
  Auth:false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add(state,action) {
      state.arr.push(action.payload)
    },
    Deleted(state,action){   
        const newarr= state.arr.filter((v)=>{
            return v!==action.payload
        })
        state.arr=newarr
    },
    clear(state){
        state.arr.length=0
      },
    updateData(state,action){
    let arr1= state.arr.slice(0,action.payload.index)
    arr1.push(action.payload.newdata)
    let arr2=state.arr.slice(action.payload.index+1)
    let nwarr=[...arr1,...arr2]
    state.arr=nwarr
      },
      AuthHand(state,action){
        state.Auth=!state.Auth
      }
      }
})

export const { add,Deleted,clear,updateData,AuthHand} = counterSlice.actions
export default counterSlice.reducer