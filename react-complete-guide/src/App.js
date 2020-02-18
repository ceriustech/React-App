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
      { name: "Bill", age: 33 },
      { name: "Cacy", age: 33 },
      { name: "Alyssa", age: 33 }
    ]
  };

  deletePersonsHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 33 },
        { name: "Cacy", age: 42 },
        { name: "Alyssa Masters", age: 13 }
      ],
      otherState: "some other value",
      showPersons: false
    });
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
        <div className="person-component_conatainer">
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
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
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Hi, I\'m a React App'));
  }
}

export default App;
