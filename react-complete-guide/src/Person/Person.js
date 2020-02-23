import React from "react";
import styled from 'styled-components'
import "./Person.css";

const StyledDiv = styled.div`
width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    -webkit-box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 12px -7px rgba(0,0,0,0.75);
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
          width: 450px;
  }
`

const person = props => {
  return (
    // <div className="Person">
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name}! I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv> 
  );
};

export default person;
