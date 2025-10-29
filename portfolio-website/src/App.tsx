import './App.css'
import Navbar from './components/Navbar/navbar'
import About from './components/about/about'
import ProjectComp from './components/project/project'
import SocialBar from './components/socialbar/socialBar'
import Contact from './components/contact/contact'
import { useRef } from 'react'

function App() {
  const contRef=useRef<HTMLDivElement>(null);
  const handleContClick=()=>{
    contRef.current?.scrollIntoView(
      {behavior:'smooth'}
    )
  }
  return (
    <>
      <div className='parentDiv'>
        <Navbar />
        <About onContactClick={handleContClick}/>
        <ProjectComp />
        <SocialBar />
        <Contact ref={contRef} />
      </div>
    </>
  )

}

export default App
