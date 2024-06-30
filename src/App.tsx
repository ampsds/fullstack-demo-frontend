//import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from "./pages/Home"
import AddUser from "./users/AddUser"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditUser from "./users/EditUser"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
