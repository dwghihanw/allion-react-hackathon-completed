import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BakeryItems from "./components/BakeryItems";
import MyOrders from "./components/MyOrders";
import Login from "./components/Login";
// import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: localStorage.getItem('name')

    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/items">
              <BakeryItems />
            </Route>
            <Route path="/myorders">
              <MyOrders />
            </Route>
            <Route path="/login">
              <Login />
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
