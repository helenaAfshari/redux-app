import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {counterSlice} from '../../redux/counterSlice'
import {counterSlice} from '../../redux/counterSlice.ts'
export default function UpBox3() {
    // نحوه گرفتن از store
    // counter نامی هست که روبرو name نوشتیم 
    // در counterSlice
    const counter = useSelector(state=>state.counter.value)
    // اون اکشنی که میخواییم و صدا میزنه 
    const dispatch=useDispatch()

    console.log(counter);
    
  return (
    <div className='bg-yellow-400 p-4'>
        <h5>UpBox3</h5>
<button
  className="bg-blue-500 text-white px-4 py-2 rounded"
  onClick={() => dispatch(counterSlice.actions.increment())}
>
  increment
</button>     
 <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => dispatch(counterSlice.actions.decrement())}>
    decrement
 </button>
   <br/>
        {/* اینجا هم ازش استفاده کردیم */}
        <p>counter:{counter}</p>
    </div>
  )
}
