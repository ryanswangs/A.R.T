import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Homepages/Home';
import Register from './Homepages/Register';
import Blog from './Homepages/Blog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes> 
          <Route path="/" element={< Home />} />
          <Route path="/register" element={< Register />} />
          <Route path="/blog" element={< Blog />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
