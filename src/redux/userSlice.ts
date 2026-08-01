import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"ali",
        children:["mari,","mamad"],
    },
    reducers:{
         addChildren:()=>{
            
         }
    }
})