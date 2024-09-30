import { Questions } from "./components/Exam/Questions"
import { Welcome } from "./components/Exam/Welcome"
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
import { NavigationBar } from "./components/Navbar/NavigationBar"
import { HomePage } from "./components/HomePage/HomePage"
import {SignUp} from "./components/SignUp/SignUp"

function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Router>
        <Layout />
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  )
}


function Layout() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/welcome", "/questions","/signup"];

  return (
    <>
      {!hideNavbarOnRoutes.includes(location.pathname) && (<> <NavigationBar /><HomePage/> </>)}
    </>
  )
}
export default App
