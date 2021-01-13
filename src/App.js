import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [ personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age : 28 },
        { name: 'Manu', age : 29 },
        { name: 'Stephanie', age : 26 },
      ],
      otherState: 'some other value'
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      // console.log('Was click!');
      // DONT DO THIS: this.state.persons[0].name = "Ryan Kavanaugh";
      setPersonsState({
        persons: [
          { name: 'Ryan', age : 24 },
          { name: 'Manu', age : 29 },
          { name: 'Stephanie', age : 27 },
        ],
        otherState: personsState
       });
    };

    return (
      <div className="App"> 
      <h1>Hi, I'm a react app</h1>
      <p>This is really working!</p>
      <h2>hell yeah!! Texas forever!</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      {/* <Person name="Manu" age="29" >My Hobbie: Racing  </Person> */}
      {/* <Person name="Stephanie" age="26" /> */}
      </div>
    );
  
}

export default app;

// state is a reserved word
  // this refers to the class
  // state = {
    
  //   // otherSate
  // }



  // render() {}