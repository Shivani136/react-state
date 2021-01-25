import React from "react";
import './App.css';
import  State from './Components/State';
 
  class App extends React.Component{

  styles = {
    color: "orange",
    fontStyle:"bold"
  };

  render(){
  return (
    <div className="App">
    <h1 style= {this.styles}> Hello World..</h1>
    <State />
    </div>
  );
}
}
export default App;
