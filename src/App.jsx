import { Questions } from "./components/Questions"
import { Welcome } from "./components/Welcome"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  )
}
export default App
