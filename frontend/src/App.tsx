import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"
import BrowseTemplates from "./screens/BrowseTemplates"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<BrowseTemplates/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
