

import React, { Component } from 'react';

import Person from "./components/Person";

class App extends Component {

state={
  persons:[
    {name:"AbdulMalik", age:"32"},
    {name:"Sohiba", age:"31"},
    {name:"Sumayya", age:"5"},
  ]
}


  render() {
    return (
      <div>
        <h2>Greetings</h2>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       
        
      </div>
    );
  }
};


export default App;
