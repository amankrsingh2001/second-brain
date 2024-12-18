
import { Outlet } from 'react-router-dom'
import './App.css'
import { Card } from './components/ui/Card'


function App() {


  return (
    <div  className='w-screen h-screen overflow-hidden'>
      <Card youTubelink="https://www.youtube.com/embed/z41Humc6hMY?si=AeoAO4_Z_74BWCIj" tweetLink='https://x.com/astrokrishanan/status/1869253214027358400'/>
      <Outlet>
      </Outlet>
    </div>
  )
}

export default App
