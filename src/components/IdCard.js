import React from 'react'

class IdCard extends React.Component {
  
   render() {
      return (
         <div>
            <img src={this.props.picture}/>
              LastName: {this.props.lastName} 
               FirstName: {this.props.firstName}
               Gender: {this.props.gender}
               Height: {this.props.height}
               Birth:{this.props.birth}
               
            
         </div>
      );
   }
}




export default IdCard;