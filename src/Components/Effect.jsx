import React, { useEffect, useState } from 'react'

export default function Effect() {
  const[sec, setSec] = useState(0);
  const[run, setRun]=useState(false);

  useEffect(()=>{
    let value;
    if(run){
        value =setInterval(()=>{
          setSec((pre)=>pre+1)
        },1000)

        return ()=> clearInterval(value)
    }

  },[run])

  const start = ()=>{
    setRun(true)
  }

  const stop =()=>{
    setRun(false)
  }

  const reset = ()=>{
    setSec(0)
  }
  return (
    <div>
     <h1>Timer : {sec}</h1>
     <button onClick={start}>Start</button>
     <button onClick={stop}>Stop</button>
     <button onClick={reset}>Reset</button>      
    </div>
  )
}
