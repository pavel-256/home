import React, { Component } from "react";
import { Link } from "react-router-dom";
import Device from "./Device";

export default class addDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      name: this.props.name,
      devices: this.props.devices,
      device: "",
      id: this.props.id, // room index
    };

    this.addProduct = this.addProduct.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.turnOnOff = this.turnOnOff.bind(this);
    this.validation = this.validation.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  handelChange(e) {
    this.setState({
      device: e.target.value,
    });
  }

  validation() {
    const stereo = (element) => element.type === "Stereo-system";
    if (this.state.devices.length < 25) {
      if (this.state.device == "Stereo-system") {
        if (this.state.devices.some(stereo)) {
          alert(" Only one stereo in this room ! ");
          return;
        }
      }
    }

    if (this.state.device === "") {
      alert("Pleace choose device");
      return;
    }

    if (this.state.devices.length < 25) {
      if (
        (this.state.device == "Boiler" && this.state.type == "BedRoom") ||
        (this.state.device == "Boiler" && this.state.type == "Kitchen")
      ) {
        alert("You can not add boiler here!");
      } else {
        this.addProduct();
      }
    } else {
      alert("You reached the maximum of devices!");
    }
  }

  addProduct() {
    this.props.sendDevice(this.state.device);
    console.log(this.state.devices);
  }

  turnOnOff(prodIndex) {
    this.props.devCondition(this.state.id, prodIndex);
    console.log(this.state.id, prodIndex);
  }

  deleteProduct(prodIndex) {
    this.props.deleteProduct(this.state.id, prodIndex);
  }

  render() {
    return (
      <div>
        <div className="">
          <div className="mt-3 ">
            <select className="form-control col-7" onChange={this.handelChange}>
              <option selected="true" disabled="disabled">
                Choose Device
              </option>
              <option value="Air-conditioner">Air-conditioner</option>
              <option value="Boiler">Boiler</option>
              <option value="Stereo-system">Stereo-system</option>
              <option value="Television">Television</option>
              <option value="Microwave">Microwave</option>
              <option value="Toster">Toaster</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Vacum cleaner">Vacum cleaner</option>
              <option value="Projector">Projector</option>
              <option value="Kettle">Kettle</option>
            </select>
            <br />
            <button
              onClick={this.validation}
              className="btn btn-info rounded-pill m-2"
            >
              Add Product
            </button>
            <Link to="/">
              <button className="btn btn-dark rounded-pill m-2">Back</button>
            </Link>
          </div>
        </div>
        <div className="">
          {this.state.devices.map((item, i) => {
            return (
              <Device
                turnOnOff={this.turnOnOff}
                theDeviceArray={this.theDeviceArray}
                device={item.type}
                condition={item.condition}
                index={i}
                deleteProduct={this.deleteProduct}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
