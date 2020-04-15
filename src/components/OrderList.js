import React, { Component } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

class OrderList extends Component {
  todaysOrders = () => {
    let orders = JSON.parse(localStorage.getItem("orders"));
    return (
      <tbody>
        {orders.map((item) => {
          return item.order.map((order) => {
            let date = new Date(order.date);
            let today = new Date();
            date.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            console.log(date.getTime(), today.getTime());
            if (date.getTime() === today.getTime()) {
              console.log("asd");
              return (
                <tr>
                  <td>{item.user}</td>
                  <td>{order.item.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                </tr>
              );
            }
          });
        })}
      </tbody>
    );
  };

  render() {
    return (
      <div>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th>Person</th>
              <th>Order Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          {this.todaysOrders()}
        </table>
      </div>
    );
  }
}

export default OrderList;
