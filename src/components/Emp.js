import React, { Component } from "react";

export class Emp extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center">
        <table border="2">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Number</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Marfatia</td>
            <td>marfatia@gmail.com</td>
            <td>9909625483</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Athar</td>
            <td>atharerit@gmail.com</td>
            <td>9558239911</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ahmed</td>
            <td>ahmed@gmail.com</td>
            <td>7990623308</td>
          </tr>
          
          
        </table>
      </div>
    );
  }
}
