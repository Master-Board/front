import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Mainpage from './routes/Mainpage.js';
import Browse from "./routes/Browse.js";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/browse" element={<Browse />} />
          <Route path="/mainpage" element={<Mainpage />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
