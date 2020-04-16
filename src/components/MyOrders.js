import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { withRouter } from "react-router";

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    let myOrders = localStorage.getItem("myorders");
    let items = [];
    if (myOrders) {
      items = JSON.parse(myOrders);
    }
    return {
      items: items,
    };
  }

  componentDidMount() {}

  confirm = () => {
    if (!localStorage.getItem("name")) {
      this.props.history.push("/login");
    } else {
      let orders = localStorage.getItem("orders");
      if (orders) {
        orders = JSON.parse(orders);
      } else {
        orders = [];
      }
      let order = {
        user: localStorage.getItem("name"),
        order: this.state.items,
      };
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));
      this.setState({
        items: [],
      });
      localStorage.removeItem("myorders");
    }
  };

  orderItem() {
    if (this.state.items.length > 0) {
      return this.state.items.map((order, index) => {
        const { qty, price, item } = order;
        return (
          <tr key={index}>
            <td className="col-1">{item.id}</td>
            <td className="col-1">
              <img width="120" src={item.image} alt="{item.name}" />
            </td>
            <td>{item.name}</td>
            <td className="col-1">{qty}</td>
            <td className="col-2">Rs {price}</td>
          </tr>
        );
      });
    } else {
      return (
        <td colSpan="5" className="text-center">
          <small>No items in your basket</small>
        </td>
      );
    }
  }

  orderMore = () => {
    this.props.history.push("/items");
  };

  orderButton() {
    if (this.state.items.length > 0) {
      return (
        <Button variant="primary" onClick={this.confirm}>
          Confirm Order
        </Button>
      );
    } else {
      return (
        <Button variant="primary" onClick={this.orderMore}>
          Order More
        </Button>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SKU</th>
                <th></th>
                <th>Bakery Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{this.orderItem()}</tbody>
          </Table>
        </div>
        <div className="col-md-10"></div>
        <div className="col-md-2 text-right">{this.orderButton()}</div>
      </div>
    );
  }
}

export default withRouter(MyOrders);
