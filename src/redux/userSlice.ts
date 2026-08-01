import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"ali",
        children:["mari,","mamad"],
    },
    reducers:{
        // پیلود همان چیزی هست که د اریم پاس میدیم 
         addChildren:(state,action)=>{
            
            // اینجا باید دیتا قدیمی را نگهدارم برای همین سه نقطه میزارم 
            state.children=[...state.children,...action.payload]
         }
    }
})