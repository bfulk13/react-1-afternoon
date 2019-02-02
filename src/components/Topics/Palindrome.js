import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
      super();

      this.state = {
        userInput: ``,
        palindrome: ``
      }
    }

    handleChange(val){
      this.setState({ userInput: val })
    }
    
    checkPalindrome(userInput){
      const str = this.state.userInput.toLowerCase().replace(/[\W_]/g, ``);
      const revStr = str.split(``).reverse().join(``);

      if(str === revStr){
        this.setState({ palindrome: `Yes, this is a palindrome!` }) 
      } else {
        this.setState({ palindrome: `No, this is not a palindrome.` })
      }
    }

    render(){
      return(
        <div className="puzzleBox filterStringPB">
          <h4>Palindrome</h4>
          <input className="inputLine" placeholder="Enter some text: 'mom'" onChange={ (e) => this.handleChange(e.target.value) } />
          <button className="confirmationButton" onClick={ () => this.checkPalindrome(this.state.userInput) }>Check Palindrome</button>
          <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
        </div>
      )
    }
}

export default Palindrome;