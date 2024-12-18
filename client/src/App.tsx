import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './page/Navbar'



function App() {


  return (
    <div  className='w-screen h-screen overflow-hidden'>
      <Navbar/>
      <Outlet>
      </Outlet>
    </div>
  )
}

export default App
