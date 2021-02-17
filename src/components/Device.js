import React, { Component } from "react";

export default class Device extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device: this.props.device,
      condition: this.props.condition,
      index: this.props.index,
    };

    this.conDitionProduct = this.conDitionProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  conDitionProduct() {
    this.props.turnOnOff(this.state.index);
  }

  deleteProduct() {
    this.props.deleteProduct(this.state.index);
  }

  render() {
    const style = {
      backgroundColor: this.state.condition ? "#28a745" : "#dc3545",
    };
    return (
      <div>
        {" "}
        <button className="btn btn-light viewProducts rounded-pill">
          <span className="bolt" onClick={this.deleteProduct}>
            <i class="fas fa-trash"></i>
          </span>
          <span className="power ">
            {" "}
            {this.state.device} -{" "}
            {this.state.condition ? (
              <i
                class="fas fa-power-off ml-2 text-success fa-lg"
                onClick={this.conDitionProduct}
              ></i>
            ) : (
              <i
                class="fas fa-power-off ml-2 text-danger fa-lg"
                onClick={this.conDitionProduct}
              ></i>
            )}
          </span>
        </button>
      </div>
    );
  }
}
