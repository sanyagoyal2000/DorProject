
import Home from './pages/Home.js';
import Vent from './pages/Vent.js';
import Talk from './pages/Talk.js';
import Trial  from './pages/trial.js'
import Profile  from './pages/profile.js';
import Dashboard  from './pages/Dashboard.js';

import Login from './components/scripts/Login.js';
import Signup from './components/scripts/Signup.js';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/vent" element={<Vent/>}/>
        <Route path="/talk" element={<Talk />}/>
        <Route path="/trial" element={<Trial/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
