import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

// Import Pages & Components
import Home from './pages/Home';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {

  const pages = ['Home', 'Bio', 'Projects', 'Contact'];
  const [currentPage, setCurrentPage] = useState(pages[0])

  return (

    <Router>
          <div className="App">

            {/* Header Navigation Bar */}
            <ResponsiveAppBar
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />

            {/* Pages */}
            <Routes>
              <Route exact path = '/Home' element={<Home/>} />
              <Route exact path = '/Bio' element={<Bio/>} />
              <Route exact path = '/Projects' element={<Projects/>} />
              <Route exact path = '/Contact' element={<Contact/>} />
            </Routes>

            {/* Footer Icons */}
            <Footer/>

          </div>
        </Router>
  );
}

export default App;
