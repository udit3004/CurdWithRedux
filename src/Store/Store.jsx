import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../Slices/TodoSlice"

export const store=configureStore({
    reducer:{
      Data:counterslice

    }
})