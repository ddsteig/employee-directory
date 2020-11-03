import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
<div>
      <header className="App-header">
      <h1>Employee Directory</h1>
 
      </header>
 
      <Router>
          <Route path="/" component={Home} />
        </Router>

    </div>
  );
}

export default App;
