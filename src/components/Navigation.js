import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Navigation extends Component {
  loginButton = () => {
    if (localStorage.getItem("name")) {
      return (
        <Link
          className="btn btn-outline-primary"
          onClick={this.logout}
          to="/login"
        >
          Logged As {localStorage.getItem("name")}, Logout?
        </Link>
      );
    } else {
      return (
        <Link className="btn btn-outline-primary" to="/login">
          Guest Login
        </Link>
      );
    }
  };

  logout = () => {
    localStorage.removeItem("name");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          Allion Chuun Paan
        </h5>
        {localStorage.getItem("name") ? (
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/myorders">
              My Order
            </Link>
            |
            <Link className="p-2 text-dark" to="/orderList">
              Today Orders
            </Link>
          </nav>
        ) : (
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/orderList">
              Today Orders
            </Link>
          </nav>
        )}

        {this.loginButton()}
      </div>
    );
  }
}

export default withRouter(Navigation);
