import React, { Component } from "react";
import {
  Link
} from "react-router-dom"

export default class Navigation extends Component {
  
  loginButton() {

    if(localStorage.getItem('name')) {
      return (
        <Link className="btn btn-outline-primary" to="" onClick={this.logout}>
          Logged As {localStorage.getItem('name')}, Logout?
        </Link>
      );
    } else {
      return (
        <Link className="btn btn-outline-primary" to="/login">
          Guest Login
        </Link>
      );
    }

  }

  logout() {
    localStorage.removeItem('name');
    window.location.href="/login";
  }

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Allion Chuun Paan</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/items">Bakery Items</Link>
          <Link className="p-2 text-dark" to="/myorders">My Order</Link>
          <Link className="p-2 text-dark" to="/orders">Orders</Link>
        </nav>

        {this.loginButton()}
      </div>
    );
  }
}
