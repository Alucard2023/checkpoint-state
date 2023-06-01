import React, { Component } from 'react'
import Person from './component/Person';


export default class App extends Component {
 constructor(props){

 
 super(props)
 this.state={show:false}
 
 }
handelclick=()=>this.setState({show: !this.state.show})
  
  
  render() {
    
    return (
      <div>
                  <h1>ahla wsahla</h1>
        <button  onClick={this.handelclick}>show/hide</button>
       {this.state.show ? <Person/> : null}
        

      </div>





    );
      
    } 
  
  }
  


