import React, { Component } from 'react';
import './App.css';
import animals from "./animals.json";

const clicked = [];

class App extends Component {

  state = {
    animals: animals,
    score: 0,
    topScore: 0,
    headline: "Click an Image to Begin!",
    clicked: false
  }

  imageClick = (e) => {
    e.preventDefault;
    if(this.state.clicked === false) {
    console.log(e.target.key)
    this.setState({headline: "You Guessed Correctly!"});
    this.setState({score: this.state.score +1});
    this.setState({topScore: this.state.topScore +1})
    this.setState({clicked: true});

    }
    else {
      this.setState({headline: "You Guessed Incorrectly"})
    }
  }
  
  render() {

    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li className="App-name">
              <a href="/">Clicky Game</a>
            </li>
            <li className="guess-notification">
              {this.state.headline}
            </li>
            <li className="score-keeper">
              Score: {this.state.score} | Top Score: {this.state.topScore}
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>Clicky Game!</h1>
          <h2>Click an image to earn points, but don't click on any more than once!</h2>
        </header>
        <main className="container">
        {this.state.animals.map((animal) => (
          <div key={animal.id} className="image-holder" onClick={(e) => this.imageClick} clicked={this.state.clicked}>
            <img src={animal.source} alt={animal.name}/>
          </div>
        ))}
        </main>
        <footer className="footer">
          <div className="bottom">
            Clicky Game 
           {/* <img src="./images/react.png" alt="react"/> */}
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
