import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/home/Home"
// import { Projects } from "./components/projects/Projects"
// import { Contact } from "./components/contact/Contact"
// import NavBar from "./components/navbar/Navbar"

function App() {
  return (<>
    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/> */}
      </Routes>
    </Router>
  </>)
}

export default App
