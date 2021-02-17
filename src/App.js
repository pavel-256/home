import React, { Component } from "react";
import {  Switch, Route } from "react-router-dom";
import "./App.css";
import Addroom from "./components/addRoom";
import Room from "./components/Room";
import Home from "./components/home";

export default class App extends Component {
  state = {
    list: [],
  };

  addRoom = (type, name, status, devices) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          type: type,
          name: name,
          status: status,
          devices: devices,
          addButton: true,
        },
      ],
    });
    console.log(this.state.list);
  };

  addDevice = (id, type) => {
    const newProduct = [...this.state.list];

    newProduct[id].devices.push({ type: type, condition: false });

    this.setState(newProduct);
    // this.setState({list:newProduct});

    console.log(this.state.list);
  };

  updateStatus = (indexRoom, indexProduct) => {
    const statusCondition = [...this.state.list];

    statusCondition[indexRoom].devices[
      indexProduct
    ].condition = !statusCondition[indexRoom].devices[indexProduct].condition;

    // this.setState({ list: statusCondition });
    this.setState(statusCondition);

    console.log(statusCondition[indexRoom].devices);
  };

  deleteProduct = (indexRoom, indexProduct) => {
    const newProduct = [...this.state.list];

    delete newProduct[indexRoom].devices[indexProduct];

    this.setState(newProduct);
  };

  render() {
    return (
      <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <Home room={this.state.list} />;
              }}
            />
            <Route
              exact
              path="/addroom"
              component={() => {
                return <Addroom addRoom={this.addRoom} />;
              }}
            />
            {this.state.list.map((val, index) => {
              return (
                <Route
                  exact
                  path={`/room/${val.name}`}
                  component={() => (
                    <Room
                      updateStatus={this.updateStatus}
                      deleteProduct={this.deleteProduct}
                      sendData={this.addDevice}
                      type={val.type}
                      name={val.name}
                      devices={val.devices}
                      index={index}
                    />
                  )}
                />
              );
            })}
          </Switch>
      </div>
    );
  }
}
