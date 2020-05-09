import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Mark', age: 30 },
      { name: 'Alex', age: 26 }
    ],
    showPersons: false
  });

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  const [otherState, setOtherState] = useState('smth');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log('Clicked');
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Mark', age: 30 },
        { name: 'Alex', age: 20 }
      ]
    })
  }

  const changeNameHandler = (event) => {
    //console.log('Clicked');
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 30 },
        { name: 'Alex', age: 20 }
      ],
      showPersons: doesShow
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    const persons = personsState.persons;
    setPersonsState({
      persons: persons,
      showPersons: !doesShow
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React  App</h1>
      <p>This is really working!!</p>
      <button
        style={style}
        onClick={togglePersonsHandler}>Swith Name</button>
      {
        personsState.showPersons === true ?
          <div>
            <Person
              name={personsState.persons[0].name}
              age={personsState.persons[0].age}
            />
            <Person
              name={personsState.persons[1].name}
              age={personsState.persons[1].age}
              click={switchNameHandler.bind(this, 'Maxi')}
              changed={changeNameHandler}
            >My Hobbies: Racing</Person>
            <Person
              name={personsState.persons[2].name}
              age={personsState.persons[2].age} />
          </div> : null
      }
    </div>
  );
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi I\'m a React App!!!'))
}

export default app;


