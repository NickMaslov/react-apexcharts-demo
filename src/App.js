import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicBar from "./BasicBar";
import UpdateBar from "./UpdateBar";
import Donat from "./Donat";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basic">Basic Bar Chart</Link>
          </li>
          <li>
            <Link to="/update">Update Bar Chart</Link>
          </li>
          <li>
            <Link to="/buble3d">Donat Bar</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/basic" component={BasicBar} />
        <Route path="/update" component={UpdateBar} />
        <Route path="/buble3d" component={Donat} />
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div className="app row home">
      <h2>JavaScript Charts</h2>
      ApexCharts is an open-source modern charting library that helps developers
      to create beautiful and interactive visualizations for web pages.
      <a href="https://apexcharts.com/">ApexCharts</a>
    </div>
  );
}
