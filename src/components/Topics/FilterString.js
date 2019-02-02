import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
      super();
      
      this.state = {
        unfilteredArray: [`James`, `Jessica`, `Melody`, `Tyler`, `Blake`, `Jennifer`, `Mark`, `Maddy`],
        userInput: ``,
        filteredArray: []
      }
    }

    handleChange(val){
      this.setState({ userInput: val })
    }

    handleFilter(userInput){
      const strArr = this.state.unfilteredArray;
      const filteredArray = [];
      
      for (let i=0; i<strArr.length; i++){
        if(strArr[i].includes(userInput)){
          filteredArray.push(strArr[i])
        }
      }

      this.setState({
        filteredArray: filteredArray,
        userInput: ``
      })
    }
    
    render(){
      return(
        <div className="puzzleBox filterStringPB">
          <h4>Filter String</h4>
          <span className="puzzleText">Array of Strings: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } value={this.state.userInput}/>
          <button className="confirmationButton" onClick={ () => this.handleFilter(this.state.userInput) }>Filter</button>
          <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
        </div>
      )
    }
}

export default FilterString;