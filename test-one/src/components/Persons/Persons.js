

import React,{Component} from 'react';

import Person from "./Person/Person";


class Persons extends Component{
    render(){

        return this.props.persons.map((person,ind)=>{
            return <Person key={person.id}
            click={()=>this.props.clicked(ind)} 
            name={person.name} 
            age={person.age}
            changed ={(e)=>this.props.changed(e, person.id)}
            />
        });

    }
}  



export default Persons;
