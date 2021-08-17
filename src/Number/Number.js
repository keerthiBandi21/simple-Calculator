import React    from "react";
import template from "./Number.jsx";



class Number extends React.Component {
  
  
  render() {
    return template.call(this);
  }
}

export default Number;
