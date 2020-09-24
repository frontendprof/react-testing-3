

import React, { Component } from 'react';

import Person from "./components/Person";

class App extends Component {

state={
  persons:[
    {name:"Abula", age:"22"},
    {name:"Soxi", age:"21"},
    {name:"Sumi",age:"1"}
  ],
  showPersons:false
}

switchNameHandler=()=>{
  this.setState({persons:[
    {name:"AbdulMalik", age:"32"},
    {name:"Sohiba", age:"31"},
    {name:"Sumayya",age:"5"}

  ]})
}

nameChangeHandler =(e)=>{
  this.setState({persons:[
    {name:"AbdulMalik", age:"32"},
    {name:e.target.value.toUpperCase(), age:"31"},
    {name:"Sumayya", age:"5"}

  ]})
}


togglePersonsHandler=()=>{

  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});
}


  render() {

    const style={
      backgroundColor:"pink",
      border:"2px solid blue",
      padding:"8px",
      cursor:"pointer",
      display:"block",
      margin:"auto"


    }

    let persons=null;

    if(this.state.showPersons){
      persons=(
      
        <div>
          <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
          />

          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
          />

          <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
          />

      </div>
      )
    }





    return (
      <div>
        <h2>Greetings</h2>
        <br></br>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <br></br>
        {persons}
        
      </div>
    );
  }
};


export default App;
