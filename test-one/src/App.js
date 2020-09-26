

import React, { Component } from 'react';
import Radium, {StyleRoot} from "radium";

import "./App.css";
import Person from "./components/Person";

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

    const style={
      backgroundColor:"indigo",
      color:"white",
      border:"2px solid orange",
      padding:"8px",
      cursor:"pointer",
      display:"block",
      margin:"auto",
      ":hover":{
        backgroundColor:"lightblue",
        color:"blue"
      }


    }

    let persons=null;

    if(this.state.showPersons){
      persons=(
      
        <div>
          {this.state.persons.map((person,ind)=>{
            return <Person key={person.id}
            click={()=>this.deletePersonHandler(ind)} 
            name={person.name} 
            age={person.age}
            changed={(e)=>this.nameChangeHandler(e, person.id)}
            />
          })}
    
        </div>
      );
      style.backgroundColor="rgb(13, 97, 76)";
      style.border="2px solid red";
      style[":hover"]={
        backgroundColor:"lightgrey",
        color:"blue"
      };
    };


    let classes=[];
    if(this.state.persons.length<=2){
      classes.push("vine");
    }

    if(this.state.persons.length<=1){
      classes.push("bold");
    }


    return (
      <StyleRoot>
      <div className="App">
        <h2>Greetings</h2>
        <hr/>
        <h2 className={classes.join("  ")}>I am React App</h2>
        <br></br>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        <br></br>
        {persons}
        
      </div>
      </StyleRoot>
    );
  }
};


export default Radium(App);
