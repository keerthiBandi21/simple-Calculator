import React    from "react";
import template from "./Home.jsx";

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      answer: "",
      question: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    debugger;
    const value = event.target.innerText;

    switch(value) {
      case 'Enter': 
      case '=': {
        if(this.state.question !== ''){
          var ans= '';
          try {
            ans = eval(this.state.question);
          }
          catch(err)
          {
            this.setState({answer: "Math Error"});
          }
          if(ans === undefined)
            this.setState({answer: "Math Error"});
          else
            this.setState({
              answer: ans,
              question: ""
            });
          
        }
      }break;
      case 'Clear': {
        this.setState({question: "", answer: ""});
        
      }break;

      case 'Delete': {
        var str = this.state.question;
        str = str.substr(0, str.length-1);
        this.setState({
          question: str
        });
        
      }break;
      default:{
        this.setState ({
          question: this.state.question += value
        });
        
      }break;

    }
  }
  render() {
    return template.call(this);
  }
}

export default Home;
