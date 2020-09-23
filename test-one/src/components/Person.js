
import React from 'react';

const Person = (props) => {
    return (
        <div >
            <h3 onClick={props.click}>

                Person importante. {props.name} is {props.age} years old.
            </h3>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default Person;
