import React, { Component } from 'react';
import './Animal.css';
import animals from "../animals.json";

class Animal extends Component {

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