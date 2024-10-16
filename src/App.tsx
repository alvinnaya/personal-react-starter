import React, { useState } from 'react';
import "./index.css"

function App() {
  const [state, setState] = useState(0)
  return (
    <>
        <div className='w-full h-full flex items-center justify-center flex-col' >
            <h1 className='text-4xl text-orange-300 font-extrabold'>Starter : {state}</h1>
            <button onClick={()=>{setState(state + 1)}}> add </button>
        </div>
       
    </>
  )
}

export default App;