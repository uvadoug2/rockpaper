import React, { Component } from 'react'
import Computer, {randomChoice, rockinfo, scissorsinfo, paperinfo, choices} from './Computer';
import ChoiceDisplay from './ChoiceDisplay';

class Game extends Component {

  constructor(props) {
     super(props);
     this.state = {
        personChoice: 1,        
     }
     
  }
  

  onGoClick() {
   
    //choices from Computer.js file
    var computer = randomChoice(choices);
    console.log("Computer Choice Value: " + computer);    
     
    this.updateComputerChoice(computer);

    this.whoWon(this.state.personChoice, computer);
  }

  //this could use updating
  updateComputerChoice(computer) {

    //info values from from Computer.js file
    if (computer == 1) {
      this.computerdisplay.innerHTML = '<p>The Computer\'s Choice</p><img src="'+ rockinfo.url+'" alt="'+rockinfo.displayTitle+'" />'+rockinfo.displayTitle;     

    } else if (computer == 2) {

      this.computerdisplay.innerHTML = '<p>The Computer\'s Choice</p><img src="'+ scissorsinfo.url+'" alt="'+scissorsinfo.displayTitle+'" />'+scissorsinfo.displayTitle;

    } else {

      this.computerdisplay.innerHTML = '<p>The Computer\'s Choice</p><img src="'+ paperinfo.url+'" alt="'+paperinfo.displayTitle+'" />'+paperinfo.displayTitle;

    }
     
  }

  onChoiceSelect(choice) {   
    
    //toggle the border of the person's choice.  
    if (choice == 1) {
      this.rockoption.className = 'col-xs-12 col-sm-4 personchoice'
      this.scissoroption.className = 'col-xs-12 col-sm-4'
      this.paperoption.className = 'col-xs-12 col-sm-4'
    } else if (choice == 2) {
      this.rockoption.className = 'col-xs-12 col-sm-4 '
      this.scissoroption.className = 'col-xs-12 col-sm-4 personchoice'
      this.paperoption.className = 'col-xs-12 col-sm-4 '
    } else {
      this.rockoption.className = 'col-xs-12 col-sm-4 '
      this.scissoroption.className = 'col-xs-12 col-sm-4 '
      this.paperoption.className = 'col-xs-12 col-sm-4 personchoice'
    }
    
    this.state.personChoice = choice;
  }

  whoWon(person, computer) {

    if (person == computer) {      
      this.result.innerHTML = "Tie...try your luck again."
    } else if (person == 1) {
        if (computer == 2) {          
          this.result.innerHTML = "You WIN!"
        }
        else {
          this.result.innerHTML = "You Lose.  Please try again."
        }      
    }
    else if (person == 2) {
      if (computer == 3) {
        this.result.innerHTML = "You WIN!"
      }
      else {
        this.result.innerHTML = "You Lose.  Please try again."
      }    
    }
    else if (person == 3) {
      if (computer == 1) {
        this.result.innerHTML = "You WIN!"
      }
      else {
        this.result.innerHTML = "You Lose.  Please try again."
      }    
    }
  }    
      
 

  render() {

       

    return(
    <div className="container">
      <h2> Welcome to the Rock, Scissors, Paper Game.</h2>
      <h4> Make a choice and hit Go!</h4>
      <div className="row padTop">
        <div ref={rockoption => this.rockoption = rockoption} onClick={() => this.onChoiceSelect(1)} className="col-xs-12 col-sm-4 personchoice">
          <ChoiceDisplay key="1" data={rockinfo} />
        </div>
        <div ref={scissoroption => this.scissoroption = scissoroption} onClick={() => this.onChoiceSelect(2)} className="col-xs-12 col-sm-4 ">
          <ChoiceDisplay key="2" data={scissorsinfo} />
        </div>
        <div ref={paperoption => this.paperoption = paperoption} onClick={() => this.onChoiceSelect(3)} className="col-xs-12 col-sm-4">
          <ChoiceDisplay key="3" data={paperinfo} />
        </div>
		  </div>

      <div className="row padTop">
        <button onClick={this.onGoClick.bind(this)} className="btn-primary btn">GO!!</button>
      </div>
      
      <div className="row padTop">
        
        <div ref={computerdisplay => this.computerdisplay = computerdisplay} className="col-xs-12">
          
        </div>       
      </div>

      <div class="row padTop">		
				
        <p className="resultText" ref={result => this.result = result}></p>
		
		  </div>
    </div>
     )
  }
 
}

export default Game 