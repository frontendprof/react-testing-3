

import React, { Component } from 'react';
// import App from "./App.css";

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

nameChangeHandler =(e)=>{
  this.setState({persons:[
    {name:"AbdulMalik", age:"32"},
    {name:e.target.value.toUpperCase(), age:"31"}

  ]})
}


  render() {
    return (
      <div>
        <h2>Greetings</h2>
        <br></br>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <br></br>

        <Person name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         click={this.switchNameHandler}

         />
        <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler}

        />
       
        
      </div>
    );
  }
};


export default App;
