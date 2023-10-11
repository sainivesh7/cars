import React, { Component } from "react";
export default class Form extends Component {
  render() {
    return (
      <div className="col">
        <h2>Login Form</h2>
        <div className="card">
          <label>Username : </label>
          <input type="text" />
          <br />
          <br />
          <label>Password :- </label>
          <input type="password" />
          <br />
          <br />jmn
          <button onclick="msg" className="subm">
            Submit
          </button>
        </div>
      </div>
    );
  }
}