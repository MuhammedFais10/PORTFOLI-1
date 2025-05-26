
import './App.css'
import Banner from './Components/Banner'
// import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { NavBar } from './Components/Navbar'


import Projects from './Components/Projects'
import { Skills } from './Components/Skills'

function App() {


  return (
    <>
    <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </>
  )
}

export default App
