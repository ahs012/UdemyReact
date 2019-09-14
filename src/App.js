import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component{
  state = {
    persons: [
      { name: 'Albert', age: 28 },
      { name: 'Mercedes', age: 22 },
      { name: 'Bob', age: 55 }
    ]
  }

  switchcaseHandler = () => {
    console.log("This Button was Clicked!")
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchcaseHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  };
}

export default App;
