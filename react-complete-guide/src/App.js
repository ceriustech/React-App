import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
import Navigation from './Navigation/Navigation'

class App extends Component {
  state = {
    persons: [
      {name: 'Bill', age: 33},
      {name: 'Cacy', age: 42},
      {name: 'Alyssa', age: 13}
    ]
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Hello I'm a React App</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Hi, I\'m a React App'));
  }
}

export default App;
