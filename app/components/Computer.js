import React, { Component } from 'react'

export function randomChoice(choices) {   
  
    return choices[Math.floor(Math.random() * choices.length)];
}

export const rockinfo={url:"img/rock.png", displayTitle:"Rock"};
export const scissorsinfo={url:"img/scissors.png", displayTitle:"Scissors"};
export const paperinfo={url:"img/paper.png", displayTitle:"Paper"}; 
export const choices = [1, 2, 3];

 //would like to have a display option for the computer.  Did not build out, but was thinking we could have animate, update, display functions for the computers choice
class Computer extends Component {

  
  render() {

   
    return(
    
      <div className="row padTop">
          <div>
				<h4>Computers Choice</h4>			
		  </div>        
      </div>
    
     )
  }
 
}

export default Computer 