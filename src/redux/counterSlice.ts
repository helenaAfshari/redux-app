import { createSlice } from "@reduxjs/toolkit";

// اینجا اومدیم اکسپورت کردیم چون میخواییم جای دیگ ایمپورت کنیم و ازش استفاده کنیم

export const counterSlice=createSlice({
    // این اسم خاصی هست که ریداکس قرار باهاش شناسایی بشه
    name:'counter',
    // مقدار اولیه هست
    // مقدار اولیه State را مشخص می‌کند.
    initialState:{
        value:0,
    }, 
        // داخل ردیوسر میگیم که استیت چگونه تغییر کند
    reducers:{
// چون میخواییم تغییر بدیم استیت رو پس از اینجا تغییر اعمال میشه  پس استیت هست اسمش 
       increment:(state)=>{
            state.value+=1;
       },
       decrement:(state)=>{
        state.value-=1;
       }
    }
});

