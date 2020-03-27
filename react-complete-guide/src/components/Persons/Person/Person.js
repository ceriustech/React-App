import React, { Component } from "react";

import classes from "./Person.css";



 class Person extends Component {
   constructor (props) {
     super(props);
     this.inputElementRef = React.createRef();
   }
componentDidMount() {
  // this.inputElement.focus(); 
  this.inputElementRef.current.focus();
}

   render() {
     console.log('[Person.js] rendering...')
    return (
      // <div className="Person">
      <div className={classes.Person}>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in!</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name}! I'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input 
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} 
        />
      </div> 
    );
   }
  
};

export default Person;
