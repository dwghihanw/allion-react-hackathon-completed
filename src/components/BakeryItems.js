import React, { Component } from "react";
import Items from "../data/Snacks";

import OderModal from "../components/OderModal";

import {
  Button
} from 'react-bootstrap'

export default class BakeryItems extends Component {
  constructor() {
    super();
    this.state = {
      items : Items,
      selectedItem: {},
      showModal: false
    }
  }

  order(item, e) {
    this.setState({
      selectedItem : item,
      showModal: true
    });
  }

  itemsList() {
    return this.state.items.map((item) => {
      return (
        <div className="col-md-4 mb-3" key={item.id}>
          <div className="card" >
            <img className="card-img-top" src={item.image} alt={item.name}/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Rs {item.price}</p>
              <Button onClick={(e) => this.order(item, e)} variant="primary">Order Now</Button>
            </div>
          </div>
        </div>

      );
    })

  }

  render() {
    return (
      <>
        <div className="row">
          { this.itemsList() }
        </div>
        <OderModal show={this.state.showModal} item={this.state.selectedItem}/>
      </>
    );
  }
}
// <OderModal item={selectedItem}/>
