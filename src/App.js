import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import {BrowserRouter as Router ,Route,Routes,Link} from "react-router-dom";
import { Index } from "./components/Index";
import { About } from "./components/About";
import { UserContext } from './UserContext';

function App() {
  const [value,setValue]= useState("hello form context");
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>
          <UserContext.Provider value ={[value,setValue]}>
            <Routes>
              <Route path="/"  element={<Index/>} />
              <Route path="/about/"  element={<About/>} />
            </Routes>
          </UserContext.Provider>
        </div>
      </Router> 
     </div>
  );
}

export default App;
