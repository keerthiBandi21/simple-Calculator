import "./Number.css";
import React from "react";


function template() {
  return (
    <div className="col-3 p-0 number">
      <button onClick={this.props.handleClick} className="btn btn-outline-info btn-lg m-1 px-4 p-3 ">{this.props.label}</button>
      
    </div>
  );
};

export default template;
