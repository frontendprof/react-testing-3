

import React from 'react';

import Person from "./Person/Person";


const Persons=(props) =>    props.persons.map((person,ind)=>{
        return <Person key={person.id}
        click={()=>props.clicked(ind)} 
        name={person.name} 
        age={person.age}
        changed ={(e)=>props.changed(e, person.id)}
        />
      }
);

export default Persons;
