import React, { Component } from 'react';
import '../App.css';

class BoxColor extends React.Component {
   
   render(){
      return(
         <div className="boxColor"
          style={{ background: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b} )`}}>
             rgb({this.props.r}, {this.props.g}, {this.props.b})
         </div>
      )
   }
}

export default BoxColor;