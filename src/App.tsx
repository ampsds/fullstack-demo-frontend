import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from "./pages/Home"
import AddUser from "./users/AddUser"
import EditUser from "./users/EditUser"
import ViewUser from "./users/ViewUser"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
