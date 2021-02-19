import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return( 
      <button className="input">
        {this.props.children}
      </button>
    )
  }
}

export default Input;
