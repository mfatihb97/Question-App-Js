import { Questions } from "./components/Exam/Questions"
import { Welcome } from "./components/Exam/Welcome"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import {NavigationBar} from "./components/Navbar/NavigationBar"
import { Nav } from "react-bootstrap"

function App() {
  return (
    // <Router>
    //  <Routes>
    //    <Route path='/' element={<Welcome />} />
    //    <Route path="/questions" element={<Questions />} />
   //   </Routes>
   // </Router>
    <NavigationBar/>
  )
}
export default App
