import React from 'react';
import {useRoutes,BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import SearchedData from './Components/SearchedData';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchCollege" element={<SearchedData />} />
    </Routes>
    </Router>
  );
}

export default App;
