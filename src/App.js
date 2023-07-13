import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import OurEvent from './components/OurEvents';
import Home from './Home';

import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/our-event' element={<OurEvent />} />
         
        </Routes>

      </div>

     <Footer />
    </Router>

  );
}



export default App;
