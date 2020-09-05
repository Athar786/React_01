import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center">
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flexDirection: "row" }}>
            <span>Email ID:</span>
            <input
              type="email"
              name="email"
              style={{ margin: "10px", height: "30px" }}
            />
          </div>
          <div style={{ flexDirection: "row" }}>
            <span>Password:</span>
            <input
              type="password"
              name="pwd"
              style={{ margin: "10px", height: "30px" }}
            />
          </div>
          <div style={{flexDirection:"row"}}>
            <button name="con" >Login</button>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        ></div>
      </div>
    );
  }
}
