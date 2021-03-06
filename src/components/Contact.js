import React, { Component } from "react";

export class Contact extends Component {
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
            <span> UserName:</span>
            <input
              type="text"
              name="uname"
              style={{ margin: "10px", height: "30px" }}
            />
          </div>
          <div style={{ flexDirection: "row" }}>
            <span>Email ID:</span>
            <input
              type="email"
              name="email"
              style={{ margin: "10px", height: "30px" }}
            />
          </div>
          <div style={{ flexDirection: "row" }}>
            <span>Message:</span>
            <textarea name="add" style={{ margin: "10px", height: "40px" }} />
          </div>
          <div style={{flexDirection:"row"}}>
            <button name="con" >Contact Us</button>
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
