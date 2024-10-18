import { useContext } from 'react'
import './App.css'
import Navbar from './component/navbar'
import './index.css'
import Body from './component/main/body'
import AboutMe from './component/main/aboutme'
import Expe from './component/main/expe'
import Footer from './component/main/footer'



function App() {
  return (
    <>
     <Navbar />
     <Body />
     <AboutMe />
     <Expe>
     </Expe>
     <Footer></Footer>
    
    </>

  )
}


export default App
