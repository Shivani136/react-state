import React, { Component } from "react";
import bellA from "./BellA.png";
import bellB from "./BellB.png";


 class State extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             message:"hello react",
             sub:"Subscribe",
             imageURL: bellA
             };
            }
             ButtononChange = () => {
                this.setState({
                    message :"Hit the bell icon never miss an upate",
                    sub:"Subscribe"
                   
                });
               };

            ImageChange =()=>{
               this.setState({
                   imageURL : bellB,
                   message:"Thankyou happy learning "
               })
            }
            styles = {
            color: "teal",
            fontStyle:"bold"
          };
        
     render(){
         return(
             <div>
                 {/* <h1 style={this.styles}> {this.state.message} welcome to our page ..</h1> */}
                 <h1 style={this.styles}> {this.state.message}</h1>
                 <button onClick ={this.ButtononChange}>
                     {this.state.sub}</button>
                     <p />
                     <img  style = {{ width : '100px' , height: '100px'}}
                     src = {this.state.imageURL} 
                     onClick ={this.ImageChange}  alt="" />

             </div>
         );
     }
 }
 export default State;