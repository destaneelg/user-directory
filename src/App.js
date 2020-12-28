import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LearnMore from "./components/LearnMore";
import Info from "./components/Info";
import Search from "./components/Search";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Index} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/learnMore" component={LearnMore} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}
export default App;
