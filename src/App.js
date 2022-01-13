
import Home from './pages/Home.js';
import Vent from './pages/Vent.js';
import Talk from './pages/Talk.js';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/vent" element={<Vent/>}/>
        <Route path="/talk" element={<Talk />}/>
      </Routes>

    </Router>
    
  );
}

export default App;
