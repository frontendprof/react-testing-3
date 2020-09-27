

import React, { Component } from 'react';
// import Radium, {StyledRoot} from "radium";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";



class App extends Component {

state={
  persons:[
    {id:"abcie",name:"Abula", age:"22"},
    {id:"feiru", name:"Soxi", age:"21"},
    {id:"mfefsfei",name:"Sumi",age:"1"}
  ],
  showPersons:false
}


nameChangeHandler =(event,id)=>{

  const personInd=this.state.persons.findIndex(p=>{
    return p.id===id;
  })

  const person={
    ...this.state.persons[personInd]
  }

  person.name= event.target.value;

  const persons=[...this.state.persons];
  persons[personInd]=person;

  this.setState({persons:persons})
}



deletePersonHandler=(perInd)=>{
  // const persons=this.state.persons.slice();
  const persons=[...this.state.persons];
  persons.splice(perInd,1);
  this.setState({persons:persons})

}


togglePersonsHandler=()=>{

  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});
}


  render() {

    let persons=null;

    if(this.state.showPersons){
      persons=<Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />   
        
      
    };


    return (
      <div className="App">
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        
        {persons}
        
      </div>
    );
  }
};


export default App;
