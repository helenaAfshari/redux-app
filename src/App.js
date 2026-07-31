import React from 'react'
import UpBox1 from './components/rightBox/UpBox1.jsx'
import UpBox2 from './components/rightBox/UpBox2.jsx'
import UpBox3 from './components/rightBox/UpBox3.jsx'
import DownBox1 from './components/leftBox/DownBox1.jsx'
export default function App() {
  return (
    <div className='App'>
       <h1>Home</h1>
      <UpBox1/>
      <br/>
      <DownBox1/>
    </div>
  )
}
