import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
<div>
      <header className="App-header">
      <h1>Employee Directory</h1>
        {/* <Router>
          <Route exact path="/" component={Home} />
        </Router> */}
      </header>
      <body>
      <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </body>
    </div>
  );
}

export default App;
