
import React from 'react';
import Radium from "radium";


import "./Person.css";


const Person = (props) => {

        const style={
            "@media (min-width:500px)":{
                width:"450px"
            }
        }
    
        
    return (
        <div className="Person" style={style}>
            <h3 onClick={props.click}>

                Person importante. {props.name} is {props.age} years old.
            </h3>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Radium(Person);
