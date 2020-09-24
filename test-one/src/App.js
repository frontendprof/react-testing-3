

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


nameChangeHandler =(e)=>{
  this.setState({persons:[
    {name:"AbdulMalik", age:"32"},
    {name:e.target.value.toUpperCase(), age:"31"},
    {name:"Sumayya", age:"5"}

  ]})
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
          {this.state.persons.map((p,ind)=>{
            return <Person key={p.name}
            click={()=>this.deletePersonHandler(ind)} 
            name={p.name} 
            age={p.age}/>
          })}
    
        </div>
      );
    };





    return (
      <div>
        <h2>Greetings</h2>
        <br></br>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        <br></br>
        {persons}
        
      </div>
    );
  }
};


export default App;
