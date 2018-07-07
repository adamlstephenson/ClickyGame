import React, { Component } from 'react';
import './App.css';
import animals from "./animals.json";
import _ from "underscore";


const clicked = [];

class App extends Component {

  state = {
    animals: _.shuffle(animals),
    score: 0,
    topScore: 0,
    headline: "Click an Image to Begin!",
  }

  imageClick = event => {

    const click = Number(event.target.id);

    if (clicked.includes(click)) {

      this.setState({
        headline: "You Guessed Incorrectly",
        score: 0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
      });

      const clicked = [];

    }
    else {

      clicked.push(click);
      this.setState({
        headline: "You Guessed Correctly!",
        score: this.state.score + 1,
      })
    }

    this.setState({ animals: _.shuffle(animals), })

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
            <div key={animal.id} className="image-holder" onClick={this.imageClick}>
              <img src={animal.source} alt={animal.name} id={animal.id} />
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
