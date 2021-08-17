import "./Result.css";
import React from "react";

function template() {
  return (
    <div className="input-group-lg">
      <input className="result form-control" readOnly value={this.props.value}/>
    </div>
  );
};

export default template;
