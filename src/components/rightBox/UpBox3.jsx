import React from 'react'
import { useSelector } from 'react-redux'

export default function UpBox3() {
    // نحوه گرفتن از store
    // counter نامی هست که روبرو name نوشتیم 
    // در counterSlice
    const counter = useSelector(state=>state.counter.value)
    console.log(counter);
    
  return (
    <div className='bg-yellow-400 p-4'>
        <h3>UpBox3</h3>
        {/* اینجا هم ازش استفاده کردیم */}
        <p>counter:{counter}</p>
    </div>
  )
}
