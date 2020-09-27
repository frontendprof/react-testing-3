
import React from 'react';
// import Radium from "radium";
import styled from 'styled-components';


// import "./Person.css";


const StyledDiv=styled.div`

    width: 60%;
    margin:auto;
    border:1px solid #eee;
    padding:16px;
    box-shadow: 0 2px 3px #ccc;
    /* text-align: center; */
    @media (min-width:500px){
        width:450px
    }
`;



const Person = (props) => {
   
        
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <h3 onClick={props.click}>

                Person importante. {props.name} is {props.age} years old.
            </h3>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
};

export default Person;
