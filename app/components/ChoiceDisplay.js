import React, { Component } from 'react'

class ChoiceDisplay extends Component {

  
  render() {
    
  return(
      <div>
        <img height="150px" src={this.props.data.url} alt={this.props.data.displayTitle} />
        <br/>
        <font className="displayTitle">{this.props.data.displayTitle}</font>
      </div>
    
     )
  }
 
}

export default ChoiceDisplay 