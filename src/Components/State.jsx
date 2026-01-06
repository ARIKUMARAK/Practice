import React, { useState } from 'react'

export default function State() {
const[count,setCount]=useState(0)

const handle = ()=>{
    setCount(count+1)
}

const dec = ()=>{
    setCount(count-1)
}

const res = ()=>{
    setCount(0)
}
  return (
    <div className='state'>
    <h1>UseState</h1>
    <h1>Count : {count}</h1>
    <button onClick={handle} className='btn btn1'>Increment</button>
    <button onClick={dec}  className='btn btn2'>Decement</button>
    <button onClick={res} className='btn btn3'>Reset</button>
    </div>
  )
}
