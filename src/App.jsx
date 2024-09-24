import { Questions } from "./components/Exam/Questions"
import { Welcome } from "./components/Exam/Welcome"
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
import { NavigationBar } from "./components/Navbar/NavigationBar"

function App() {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  )
}


function Layout(){
  const location = useLocation();

  const hideNavbarOnRoutes = ["/welcome","/questions"];

  return(
    <>
      {!hideNavbarOnRoutes.includes(location.pathname)&& <NavigationBar />}
    </>
  )
}
export default App
