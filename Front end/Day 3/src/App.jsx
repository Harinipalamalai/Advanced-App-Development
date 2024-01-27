
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import First from './Pages/First'
import Signup from './Pages/signup'
import Login from './Pages/login'
import Nav from './Pages/nav'
import Services from './Pages/Services'
function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
          <Route path="/" element={<First/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/nav" element={<Nav/>}/>
            <Route path="/Services" element={<Services/>}/>
          </Routes>
        </Router>
       
    
      </div>
      
    </>
  )
}

export default App
