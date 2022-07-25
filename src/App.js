import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import Login from "./routes/Login.jsx";
import Signup from "./routes/Signup.jsx";
import Mainpage from './routes/Mainpage.jsx';
import Parade from "./routes/Parade.jsx";
import Deception from "./routes/Deception.jsx";
import Tichu from "./routes/Tichu.jsx";
import Fertility from "./routes/Fertility.jsx";

function App() {

  const [user, setUser] = useState({id:"형진", password:"1234", isLogIn: true});
  const [games, setGames] = useState([{
    title: 'parade',
    items: {results: [{number: 4}, {number: 3}, {number: 1}, {number: 5}, {number: 6}, {number: 2}, {number: 1}, {number: 4}, {number: 2}, {number: 6}, {number: 6}, {number: 5}]},
    people: 6,
    grade: 4.5
  },
  {
    title: 'deception',
    items: {results: [{number:2}, {number: 5}, {number: 2}, {number: 1}, {number: 2}]},
    people: 6,
    grade: 4.5
  },
  {
    title: 'tichu',
    items: {results: [{number:2}, {number: 3}, {number: 1}]},
    people: 4,
    grade: 4.5
  },
  {
    title: 'fertility',
    items: {results: [{number:2}, {number: 3}, {number: 1}]},
    people: 6,
    grade: 4.5
  }]);

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={user.isLogIn == true ? <Navigate to="/mainpage" /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/mainpage" element={<Mainpage user={user} setUser={setUser} games={games} setGames={setGames} />} />
          <Route path="/parade/:roomNumber" element={<Parade user={user} setUser={setUser} />} />
          <Route path="/deception/:roomNumber" element={<Deception user={user} setUser={setUser} />} />
          <Route path="/tichu/:roomNumber" element={<Tichu user={user} setUser={setUser} />} />
          <Route path="/fertility/:roomNumber" element={<Fertility user={user} setUser={setUser} />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
