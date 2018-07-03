import React, { Component } from 'react';
import './Animal.css';
import animals from "../animals.json";

class Animal extends Component {

    state = {
        animals: animals,
        score: 0,
        topScore: 0,
        headline: "Click an Image to Begin!",
        clicked: "false"
      }

      imageClick = (props) => {

        this.setState({headline: "You Guessed Correctly!"});
        this.setState({score: this.state.score +1});
        this.setState({topScore: this.state.topScore +1})
        this.setState({clicked: "true"}); 
        }

    render() {
        return (
            <main>
            {this.state.animals.map((animal) => (
                <div key={animal.id} className="image-holder" onClick={this.imageClick} clicked={this.state.clicked}>
                  <img src={animal.source} alt={animal.name}/>
                </div>
              ))}
            </main>
        )
    }
}

export default Animal;