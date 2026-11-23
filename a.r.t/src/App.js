import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Homepages/Home';
import Register from './Homepages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes> 
          <Route path="/" element={< Home />} />
          <Route path="/register" element={< Register />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
