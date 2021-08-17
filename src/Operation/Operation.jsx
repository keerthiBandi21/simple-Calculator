import "./Operation.css";
import React from "react";

function template() {
  return (
    <div className="col-sm-3 p-0 operation">
      <button onClick = {this.props.handleClick} className="btn btn-outline-info btn-lg m-1 p-4">{this.props.label}</button>
    </div>
  );
};

export default template;
