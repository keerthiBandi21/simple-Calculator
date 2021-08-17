import React    from "react";
import template from "./Result.jsx";

class Result extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Result;
