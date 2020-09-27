

import React from 'react';
import styled from 'styled-components';


import "./Cockpit.css";


const StyledButton=styled.button`
  background-color:${props=>props.cond?"rgb(13, 97, 76)":"indigo"};
  color:white;
  border:${props=>props.cond?"2px solid red":"2px solid orange"};  
  padding:8px;
  cursor:pointer;
  display:block;
  margin:auto;
  
  &:hover{
    background-color:${props=>props.cond?"lightblue":"rgb(246, 51, 84)"};
    color:${props=>props.cond?"blue":"yellow"};
    `;





const Cockpit = (props) => {


    let classes=[];
    if(props.persons.length<=2){
      classes.push("vine");
    }

    if(props.persons.length<=1){
      classes.push("bold");
    }


    return (
        <div>
            <h2>Greetings</h2>
            <hr/>
            <h2>{props.title}</h2>
            <hr/>
            <h2 className={classes.join("  ")}>I am React App</h2>
            <br></br>
            <StyledButton 
            cond={props.showPersons}
            onClick={props.clicked}>Toggle Persons
            </StyledButton>
            <br></br>
            
        </div>
    );
}


export default Cockpit;