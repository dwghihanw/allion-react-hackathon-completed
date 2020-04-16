import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BakeryItems from "./components/BakeryItems";
import MyOrders from "./components/MyOrders";
import Login from "./components/Login";
// import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import OrderList from "./components/OrderList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: localStorage.getItem("name"),
    };
  }

  getLoggedUser = () => {
    return localStorage.getItem("name");
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route  exact path="/">
                <BakeryItems />
            </Route>
            <Route path="/myorders">
              {() =>
                this.getLoggedUser() ? <MyOrders /> : <Redirect to="/login" />
              }
            </Route>
            <Route path="/orderList">
              <OrderList />
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
