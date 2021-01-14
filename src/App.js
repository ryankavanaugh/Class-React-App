import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = { 
  persons: [
        { name: 'Max', age : 28 },
        { name: 'Manu', age : 29 },
        { name: 'Stephanie', age : 26 },
      ],
      otherState: 'some other value'
    };

    // const [otherState, setOtherState] = useState('some other value');

    // console.log(personsState, otherState);

    switchNameHandler = () => {
      // console.log('Was click!');
      // DONT DO THIS: this.state.persons[0].name = "Ryan Kavanaugh";
      this.setState({
        persons: [
          { name: 'Ryan', age : 24 },
          { name: 'Manu', age : 29 },
          { name: 'Stephanie', age : 27 },
        ],
        otherState: this.personsState
       });
    };

    render(){
    return (
      <div className="App"> 
      <h1>Hi, I'm a react app</h1>
      <p>This is really working!</p>
      <h2>hell yeah!! Texas forever!</h2>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchNameHandler}>
        Hobbies: horse back riding
      </Person> 
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} />
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
      </div>
    );
  
}
}

export default App;

// state is a reserved word
  // this refers to the class
  // state = {
    
  //   // otherSate
  // }



  // render() {}