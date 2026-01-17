import React,  { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import HeaderMobile from './components/Header_mobile'; 
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';


import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Call the function to clear localStorage on browser unload
  // clearLocalStorageOnUnload(); 
  return (
    <div>
      <Router>
        {isMobile ? <HeaderMobile /> : <Header />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/work" element={<Work />} />
          </Routes>
        {/* <Footer /> */}
      </Router>
    </div> 
  );

}

export default App;