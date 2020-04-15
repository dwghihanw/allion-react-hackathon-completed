import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class OderModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState
  }

  get initialState() {
    return {
      modalShow: false,
      myOrders : [],
      qty: 0,
      formErrors: {
        qty : 'Qty should more than zero'
      },
      qtyValid: false,
      formSubmitted: false,
      orderPrice: 0
    };
  };


  handleClose = () => {
    this.setState({ modalShow: false });
  }

  order = () => {
    this.setState({ formSubmitted: true});
    let order = {};
    if(this.state.qtyValid) {
        order.qty = this.state.qty;
        order.price = this.state.orderPrice;
        order.item = this.props.item
        this.state.myOrders.push(order);
        localStorage.setItem('myorders', JSON.stringify(this.state.myOrders));
        this.setState({
          modalShow: false,
        });
    }
  }

  handleQtyChanges = (e) => {
    this.setState({ qty: e.target.value });
    let price = parseInt(this.props.item.price) * parseInt(e.target.value);
    if(parseInt(e.target.value) > 0) {
      this.setState({
        qtyValid: true,
        orderPrice: price
      });

    } else {
      this.setState({
        qtyValid: false,
        orderPrice: 0
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.initialState);
     this.setState({
       modalShow: nextProps.show
     });
     let myOrders = localStorage.getItem('myorders');
     if(myOrders) {
       this.setState({
         myOrders: JSON.parse(localStorage.getItem('myorders'))
       });
     }


  }

  orderPrice = () => {
    if(this.state.orderPrice > 0) {
      return (
        <div className="col-sm-5">
            <small><b>Order price - Rs {this.state.orderPrice}</b></small>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group row">
              <label htmlFor="qty" className="col-sm-2 col-form-label">Qty</label>
              <div className="col-sm-5">
                <input type="number" required onChange={this.handleQtyChanges} className={!this.state.qtyValid && this.state.formSubmitted ? 'is-invalid form-control' : 'form-control'} id="qty" name="qty" placeholder="Qty"/>
                <div className="invalid-feedback">
                 { this.state.formErrors.qty }
               </div>
              </div>

              { this.orderPrice() }

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              No, Thanks
            </Button>
            <Button  variant="primary" onClick={this.order}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
