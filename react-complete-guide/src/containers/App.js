import React, { Component } from "react";
import classes from "./App.css";
import Navigation from "../components/Navigation/Navigation";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";



class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor'); 
  }
  state = {
    navigation: [
      { home: "Home" },
      { news: "News" },
      { contact: "Contact" },
      { about: "About" }
    ],
    
    persons: [
      { id: 1, name: "Bill", age: 33 },
      { id: 2, name: "Cacy", age: 33 },
      { id: 3, name: "Alyssa", age: 33 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true; 
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; 
  } 
  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonsHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          />
      ); 
    }

  

    return (
      <div className={classes.App}>
        <Navigation
          navItem={this.state.navigation[0].home}
          navItem2={this.state.navigation[1].news}
          navItem3={this.state.navigation[2].contact}
          navItem4={this.state.navigation[3].about}
        />
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler} />
        {persons} 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Hi, I\'m a React App'));
  }
}

export default App;
