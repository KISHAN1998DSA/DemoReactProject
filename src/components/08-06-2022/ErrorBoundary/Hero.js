import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

// function Hero({heroName}) {
//   if(heroName==='Joker')
//   {
//       throw new Error('Not a Hero')
//   }
//     return (
//     <div>{heroName}</div>
//   )
// }
class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroName: "",
    };
  }
  handleText = (e) => {
    console.log(this.state.heroName);
    this.setState({
      heroName: e.target.value,
    });
  };
  checkError = () => {
    if (this.state.heroName === "Joker") {
      throw new Error("Not a Hero");
    }else{
        alert('Correct')
    }
  };

  render() {
    return (
      <>
        <h1>{this.state.heroName}</h1>
        <input
          type="text"
          value={this.state.heroName}
          id="err"
          onChange={this.handleText}
        />
        <ErrorBoundary >
        <button onClick={this.checkError}>Check</button>
        </ErrorBoundary>
      </>
    );
  }
}

export default Hero;
