import { useState } from 'react'

function App() {
  const [color, setColor] = useState("blue")
  return (

    <div className='w-full h-screen flex justify-center items-end' style={{ backgroundColor: color }}>
      <div className='flex flex-wrap mb-10'>
        <div className="flex justify-center items-center p-3 gap-5 rounded-full bg-amber-100 h-14 ">
          <button onClick={() => setColor("red")} className='p-2 rounded-full ' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("blue")} className='p-2 rounded-full ' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("green")} className='p-2 rounded-full ' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("orange")} className='p-2 rounded-full ' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("pink")} className='p-2 rounded-full ' style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>
    </div>

  )
}

export default App
