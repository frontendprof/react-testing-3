

import React, { Component } from 'react';

import Person from "./components/Person";

class App extends Component {

state={
  persons:[
    {name:"Abula", age:"22"},
    {name:"Soxi", age:"21"}
  ]
}

switchNameHandler=()=>{
  this.setState({persons:[
    {name:"AbdulMalik", age:"32"},
    {name:"Sohiba", age:"31"},
    // {name:"Kid", age:null}

  ]})
}


  render() {
    return (
      <div>
        <h2>Greetings</h2>
        <br></br>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <br></br>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       
        
      </div>
    );
  }
};


export default App;
