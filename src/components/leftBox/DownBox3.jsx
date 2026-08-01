
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../../redux/userSlice.ts';

export default function DownBox3() {
    const counter =useSelector((state)=>state.counter.value);
    const userChildren = useSelector((state)=>state.user.children);
    // قرار یک اکشن را صدا بزنم از دیسپچ استفاده میکنیم
    const dispatch=useDispatch()

    console.log(userChildren);
    
  return (
    <div className='bg-green-500 p-4'>
        <h3>DownBox3</h3>
        {/* حالا ما اینجا دیسپچ را نوشتیم میخواییم چه چیزی رو برای ما ارسال کنه دیسپچ کنه */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded"
         onClick={()=>dispatch(userSlice.actions.addChildren(["senko","korom"]))}>addChildren</button>
        <h3>counter:{counter}</h3>
        {
        userChildren.map((child)=>
        (<h3>{child}</h3>)
      )
        }
        <br/>
        
    </div>
  )
}