import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
      super();
      this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ``
      }
    }
    handleChange(val){
      this.setState({ userInput: val })
    }

    assignEvenAndOdds(input){
      let userArr = input.split(`,`);
      userArr = userArr.map(input => parseInt(input,10));
      const evens = userArr.filter( (input) => input % 2 === 0);
      const odds = userArr.filter( (input) => input % 2 !== 0);
      this.setState({
        evenArray: evens,
        oddArray: odds,
        userInput: ``
      })
    }

    render(){
      return(
        <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } value={this.state.userInput}/>
          <button className="confirmationButton" onClick={ () => this.assignEvenAndOdds(this.state.userInput) }> Split </button>
          <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
          <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>
        </div>
      )
    }
}

export default EvenAndOdd;