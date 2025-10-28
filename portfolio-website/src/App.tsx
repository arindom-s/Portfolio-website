import './App.css'
import Navbar from './components/Navbar/navbar'
import About from './components/about/about'
import ProjectComp from './components/project/project'
import SocialBar from './components/socialbar/socialBar'

function App() {
  return (
    <>
      <div className='parentDiv'>
        <Navbar />
        <About />
        <ProjectComp />
        <SocialBar />
      </div>
    </>
  )

}

export default App
