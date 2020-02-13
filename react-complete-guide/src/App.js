import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 
import Navigation from './Navigation/Navigation'

class App extends Component {
  state = {
    navigation: [
      {home: 'Home'},
      {news: 'News'},
      {contact: 'Contact'},
      {about: 'about'}
    ],
    persons: [
      {name: 'Bill', age: 33},
      {name: 'Cacy', age: 42},
      {name: 'Alyssa', age: 13}
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was Clicked!');
    // DON"T DO THIS this.state.persons[0].name = "Caleb Masters";
    this.setState({persons: [
      {name: newName, age: 33},
      {name: 'Cacy Masters', age: 42},
      {name: 'Alyssa Masters', age: 13}
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value, age: 33},
      {name: 'Cacy', age: 42},
      {name: 'Alyssa Masters', age: 13}
    ]});
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <Navigation navItem={this.state.navigation[0].home}
        navItem2={this.state.navigation[1].news}
        navItem3={this.state.navigation[2].contact}
        navItem4={this.state.navigation[3].about} 
        />
        <h1>Hello I'm a React App</h1>
        <button style={style} onClick={() => this.switchNameHandler()}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Bilal Masters')}
        changed={this.nameChangeHandler}
        />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Hi, I\'m a React App'));
  }
}

export default App;
