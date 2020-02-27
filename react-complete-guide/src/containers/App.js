import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import Navigation from "../components/Navigation/Navigation";
import Persons from "../components/Persons/Persons";



class App extends Component {
  state = {
    navigation: [
      { home: "Home" },
      { news: "News" },
      { contact: "Contact" },
      { about: "about" }
    ],
    persons: [
      { id: 1, name: "Bill", age: 33 },
      { id: 2, name: "Cacy", age: 33 },
      { id: 3, name: "Alyssa", age: 33 }
    ],
    otherState: "some other value",
    showPersons: false
  };

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      btnClass = classes.red;
    }

    let arrClasses = []; 

    if(this.state.persons.length <= 2) {
      arrClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      arrClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <Navigation
          navItem={this.state.navigation[0].home}
          navItem2={this.state.navigation[1].news}
          navItem3={this.state.navigation[2].contact}
          navItem4={this.state.navigation[3].about}
        />
        <h1>Hello I'm a React App</h1>
        <p className={arrClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Hi, I\'m a React App'));
  }
}

export default App;
