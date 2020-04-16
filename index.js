import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Navigation from "./src/components/Navigation";
import Footer from "./src/components/Footer";
import BakeryItems from "./src/components/BakeryItems";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <div class="container">
          <Switch>
            <Route path="/login">
              <BakeryItems />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
