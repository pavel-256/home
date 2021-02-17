import React, { Component } from "react";

import AddDevice from "./addDevice";

export default class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      name: this.props.name,
      color: this.props.color,
      devices: this.props.devices,
      index: this.props.index, // index of room
    };

    this.sendDevice = this.sendDevice.bind(this);
    this.devCondition = this.devCondition.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  sendDevice(newDevice) {
    this.props.sendData(this.state.index, newDevice);
  }

  devCondition(indexRoom, indexProduct) {
    this.props.updateStatus(indexRoom, indexProduct);
  }

  deleteProduct(indexRoom, indexProduct) {
    this.props.deleteProduct(indexRoom, indexProduct);
  }

  render() {
    return (
      <div>
        <div align="center">
          <div className="home mt-5 container">
            <h1 className="display-3 text-info">
              {" "}
              {this.state.name.charAt(0, 1).toUpperCase() +
                this.state.name.slice(1)}
              's  Room
            </h1>
            <div className="name">
              <h3>{this.state.type} </h3>
            </div>
            <AddDevice
              devices={this.state.devices}
              sendDevice={this.sendDevice}
              devCondition={this.devCondition}
              deleteProduct={this.deleteProduct}
              id={this.state.index}
              type={this.state.type}
              name={this.state.name}
            />
          </div>
        </div>
      </div>
    );
  }
}
