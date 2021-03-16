import React, {Component} from 'react';

class Random extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         min: props.min,
         max: props.max,
         random: 0
      }
      };
      componentDidMount = () => {
         this.state.random = this.setState({
            random: Math.floor((Math.random() * (this.state.max - this.state.min))),
         });
   }
   render() {
      return (
         <div>
            <h2 > Random value between {this.props.min} and {this.props.max} is {this.state.random} </h2>
         </div>
      );
   }
};

export default Random;