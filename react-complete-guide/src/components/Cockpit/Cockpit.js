import React, { useEffect,useRef } from 'react';

import classes from './Cockpit.css';

const cockPit = (props) => {
    const toggleBtnRef = useRef(null); 

    useEffect(() => {

        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Saved Data To Cloud!');
        // }, 2000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] Cleanup work effect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd Cleanup work effect');
        }
    });

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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockPit); 