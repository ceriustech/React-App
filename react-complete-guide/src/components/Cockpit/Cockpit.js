import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockPit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved Data To Cloud!');
        }, 2000);
    }, []);

    const arrClasses = []; 
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }
    
    if(props.persons.length <= 2) {
      arrClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      arrClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hello I'm a React App</h1>
            <p className={arrClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}

export default cockPit; 