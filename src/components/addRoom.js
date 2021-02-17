import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import toastr from "toastr";

class AddRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      name: "",
      status: "",
      devices: [],
      alertStatus: {
        type: false,
        name: false,
        status: false,
      },
    };

    this.handelChange = this.handelChange.bind(this);
    this.validation = this.validation.bind(this);
    this.toaster = this.toaster.bind(this);
  }

  handelChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  validation(event) {
    event.preventDefault();

    if (
      this.state.type === "" &&
      this.state.name === "" &&
      this.state.status === ""
    ) {
      this.setState({
        alertStatus: {
          type: true,
          name: false,
          status: false,
        },
      });
    } else if (this.state.type === "") {
      this.setState({
        alertStatus: {
          type: true,
          name: false,
          status: false,
        },
      });
    } else if (this.state.status === "") {
      this.setState({
        alertStatus: {
          type: false,
          name: false,
          status: true,
        },
      });
    } else if (!this.state.name.match(/[a-zא-ת]/)) {
      this.setState({
        alertStatus: {
          type: false,
          name: true,
          status: false,
        },
      });
    } else {
      this.props.addRoom(
        this.state.type,
        this.state.name,
        this.state.status,
        this.state.devices
      );
      this.props.history.push("/");
      this.toaster();
    }
  }

  toaster() {
    toastr.options = {
      positionClass: "toast-top-full-width",
      hideDuration: 300,
      timeOut: 1200,
    };
    toastr.clear();
    setTimeout(() => toastr.success(`New room added ${this.state.name}`), 500);
  }

  render() {
    const style = {
      type: {
        visibility:
          this.state.alertStatus.type === false ? "hidden" : "visible",
        color: "#dc3545",
      },
      name: {
        visibility:
          this.state.alertStatus.name === false ? "hidden" : "visible",
        color: "#dc3545",
      },
      status: {
        visibility:
          this.state.alertStatus.status === false ? "hidden" : "visible",
        color: "#dc3545",
      },
    };
    return (
      <div>
        <div>
          <div className="home container">
            <h1 className="display-3 text-info">Smart House</h1>
            <br />
            <br />
            <br />

            <form onSubmit={this.validation} className="form-group">
              <select
                name="type"
                onChange={this.handelChange}
                className="form-control col-7 m-auto"
              >
                <option selected="true" disabled="disabled">
                  Choose room
                </option>
                <option>BedRoom</option>
                <option>Bathroom/Toilet</option>
                <option>Kitchen</option>
              </select>

              <span style={style.type}>Pleace choose the room</span>
              <br />
              <select
                name="status"
                onChange={this.handelChange}
                className="form-control col-7 m-auto"
              >
                <option selected="true" disabled="disabled">
                  Choose status
                </option>
                <option>Open</option>
                <option>Close</option>
              </select>
              <span style={style.status}>Please enter the room status</span>
              <input
                onChange={this.handelChange}
                placeholder="Room name"
                maxLength="5"
                type="text"
                value={this.state.name}
                name="name"
                className="form-control col-7 m-auto"
              />
              <span style={style.name}>
                Pleace enter room name - only letters
              </span>
              <br />

              <br />
              <button
                type="submit"
                className="btn btn-info btn-lg rounded-pill "
              >
                Create Room
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddRoom);

// this.props.addRoom(
//   this.state.type,
//   this.state.name,
//   this.state.color,
//   this.state.devices
// );
// this.props.history.push("/"); // <--- The page you want to redirect your user to.   props.history.push - fixed

// if (this.state.type === "" || this.state.status === "") {
//   this.setState({
//     alertStatus: {
//       type: true,
//       name: false,
//       status: true,
//     },
//   });
// }

// if (this.state.name === "" || this.state.type === "") {
//   this.setState({
//     alertStatus: {
//       type: true,
//       name: false,
//       status: true,
//     },
//   });
// }
