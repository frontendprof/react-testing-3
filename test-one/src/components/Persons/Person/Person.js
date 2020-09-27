
import React,{Component} from 'react';
// import Radium from "radium";
import styled from 'styled-components';


// import "./Person.css";


const StyledDiv=styled.div`

    width: 60%;
    margin:auto;
    border:1px solid #eee;
    padding:16px;
    box-shadow: 0 2px 3px #ccc;
    /* text-align: center; */
    @media (min-width:500px){
        width:450px
    }
`;



class Person extends Component {
    render(){

        return (
            // <div className="Person" style={style}>
            <StyledDiv>
                <h3 onClick={this.props.click}>
    
                    Person importante. {this.props.name} is {this.props.age} years old.
                </h3>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </StyledDiv>
        );


    }
   
        
  
};

export default Person;
