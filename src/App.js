import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/index';

class App extends Component{
  state = {
    persons : [
      {name:'Albert', age: 28}
    ]
  }
  render(){
    return(
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Max" age="33"/>
        <Person name="Albert" age="28"/>
        <Person name="Bob" age="56"/>
      </div>
    )
  }
}

export default App;
