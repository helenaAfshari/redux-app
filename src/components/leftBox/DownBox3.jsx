
import React from 'react'
import { useSelector } from 'react-redux'

export default function DownBox3() {
    const counter =useSelector((state)=>state.counter.value);
  return (
    <div className='bg-green-500 p-4'>
        <h3>DownBox3</h3>
        <h3>counter:{counter}</h3>
        
    </div>
  )
}