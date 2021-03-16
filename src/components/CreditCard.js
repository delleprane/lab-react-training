import React, { Componet } from 'react';
import visa from '../img/visa.png';
import masterCard from '../img/master-card.svg'
import '../App.css';

class CreditCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         number: props.number,
         type: props.type,
         clearNumber: 0
      }
   };

   componentDidMount = () => {
      let number = this.state.number
      let clear = number.substr(12);
      this.state.clearNumber = this.setState({
         clearNumber: `•••• •••• •••• ${clear}`,
      });

   }

   render() {
      return (
         <div className="creditCard"
            style={{ background: this.props.bgColor }}>
            {/* {this.props.type}
            {this.props.number}
            {this.props.expirationMonth}
            {this.props.expirationYear}
            {this.props.bank}
            {this.props.owner}
            {this.props.bgColor}
            {this.props.color} */}
            {/* {this.state.number} */}
            <div className="type">
               <div className={this.state.type}></div>
            </div>
            <div className="number">{this.state.clearNumber}</div>

         </div>
      )
   }

}

export default CreditCard;