import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Navigation from "./Navigation/Navigation";

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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <Navigation
          navItem={this.state.navigation[0].home}
          navItem2={this.state.navigation[1].news}
          navItem3={this.state.navigation[2].contact}
          navItem4={this.state.navigation[3].about}
        />
        <h1>Hello I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Hi, I\'m a React App'));
  }
}

export default App;
