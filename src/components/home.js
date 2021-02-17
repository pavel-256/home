import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowRoom from "../components/ShowRoom";
export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: this.props.room,
    };
  }

  render() {
    return (
      <div>
        <div className="home  container ">
          <h1 className="display-3 text-info">Smart House</h1>
          <div className="d-flex flex-row flex-wrap">
            {this.state.room.map((val, index) => {
              return (
                <Route
                  exact
                  path="/"
                  component={() => (
                    <ShowRoom
                      type={val.type}
                      name={val.name}
                      status={val.status}
                      devices={val.devices}
                      index={index}
                    />
                  )}
                />
              );
            })}
          </div>
          <div className="row">
            <div className="col">
              <Link to="/addroom">
                <button className="Addroom btn btn-info btn-lg">
                  Add Room <br />
                  <i class="fas fa-plus"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
