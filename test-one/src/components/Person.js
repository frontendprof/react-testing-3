
import React from 'react';

const Person = (props) => {
    return (
        <div>
            Person importante. {props.name} is {props.age} years old.
        </div>
    )
};

export default Person;
