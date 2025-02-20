import Navbar from "./components/Navbar"
import Index from "./pages/Index"
import { Route,Routes } from "react-router-dom"
import About from "./pages/About"
import Project from "./pages/Project"
import { Contact } from "./pages/Contact"
function App() {

  return (
    <>
      <Navbar/>
      <Routes >
        <Route path='/'  element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </>
  )
}

export default App
