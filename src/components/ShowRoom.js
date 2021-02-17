import React, { Component } from "react";
import { Link } from "react-router-dom";
import closedDoor from "../images/closed.png";
import openDoor from "../images/open.png";
import { withRouter, Route } from "react-router-dom";

class ShowRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      name: this.props.name,
      status: this.props.status,
      devices: this.props.devices,
    };

    this.roomRoute = this.roomRoute.bind(this);
  }

  roomRoute() {
    this.props.history.push(`/room/${this.state.name}`);
  }

  render() {
    const style = {};
    return (
      <div className="p-2" type="button" onClick={this.roomRoute}>
        <h2 className="roomTitle">
          {this.state.name.charAt(0, 1).toUpperCase() +
            this.state.name.slice(1)}
        </h2>
        {
          //Check if message failed
          this.state.status === "Open" ? (
            <img className="door" src={openDoor} alt="" />
          ) : (
            <img className="door" src={closedDoor} alt="" />
          )
        }
      </div>
    );
  }
}

export default withRouter(ShowRoom);
