import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Mainpage from './routes/Mainpage.jsx';
import Browse from "./routes/Browse.jsx";
import Deception from "./routes/Deception.jsx";
import Login from "./routes/Login.jsx";
import userEvent from '@testing-library/user-event';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/browse" element={<Browse/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/deception" element={<Deception />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
