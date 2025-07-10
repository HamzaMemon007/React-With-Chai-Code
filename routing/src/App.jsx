import { Routes , Route } from 'react-router-dom'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
function App() {


  return (
    <>
     <Routes>
      <Route path='/About' element={<About/>} />
      <Route path='/' element={<Home/>} />
     </Routes>
    </>
  )
}

export default App
