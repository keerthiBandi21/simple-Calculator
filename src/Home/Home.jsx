import "./Home.css";
import React from "react";
import Number from '../Number/index';
import Operation from '../Operation/index';
import Result from '../Result/index';
import {myCtx} from '../index';

function template() {
  return (
    <myCtx.Provider value="12">
    <div className="container my-5 border p-3 home">
      <div className="row mb-4">
        <Result value={this.state.question} />
        <Result value={this.state.answer} />
      </div>
      <div className="row row-col-4">
      <div className="col-sm p-0 m-1">
        <button onClick = {this.handleClick} className="btn btn-info btn-lg m-2">Clear</button>
        <button onClick = {this.handleClick} className="btn btn-info btn-lg m-1">Delete</button>
      </div>
        <Number  label="." handleClick = {this.handleClick}/>
        <Number label="/" handleClick = {this.handleClick}/> 
        <Number  label="7" handleClick = {this.handleClick}/>
        <Number   label="8" handleClick = {this.handleClick} />
        <Number  label="9" handleClick = {this.handleClick}/>
        <Number label="+" handleClick = {this.handleClick} />
        <Number  label="4" handleClick = {this.handleClick}/>
        <Number  label="5" handleClick = {this.handleClick}/>
        <Number  label="6" handleClick = {this.handleClick}/>
        <Number label="-" handleClick = {this.handleClick}/>
        <Number  label="1" handleClick = {this.handleClick}/>
        <Number  label="2" handleClick = {this.handleClick}/>
        <Number  label="3" handleClick = {this.handleClick}/>
        <Number label="*" handleClick = {this.handleClick}/>
        <Number  label="0" handleClick = {this.handleClick}/>
        
        <Number  label="=" handleClick = {this.handleClick} />
        <div className="col-sm p-1 m-1">
        <button onClick = {this.handleClick} className="container-fluid btn btn-info btn-lg ">Enter</button>
      </div>
      </div>
      
    </div>
    </myCtx.Provider>
  );
};

export default template;
