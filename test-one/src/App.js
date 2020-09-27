

import React, { Component } from 'react';
// import Radium, {StyledRoot} from "radium";
import styled from 'styled-components';

import "./App.css";
import Person from "./components/Person";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";


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
      persons=(
      
        <div>
          {this.state.persons.map((person,ind)=>{
            return <ErrorBoundry  key={person.id}><Person
            click={()=>this.deletePersonHandler(ind)} 
            name={person.name} 
            age={person.age}
            changed={(e)=>this.nameChangeHandler(e, person.id)}
            /></ErrorBoundry>
          })}
    
        </div>
      );
    };


    let classes=[];
    if(this.state.persons.length<=2){
      classes.push("vine");
    }

    if(this.state.persons.length<=1){
      classes.push("bold");
    }


    return (
      <div className="App">
        <h2>Greetings</h2>
        <hr/>
        <h2 className={classes.join("  ")}>I am React App</h2>
        <br></br>
        <StyledButton 
        cond={this.state.showPersons}
        onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        <br></br>
        {persons}
        
      </div>
    );
  }
};


export default App;
