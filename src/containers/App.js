import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const App = ({ appTitle }) => {
  const [persons, setPersons] = useState([
    { id: 'asfa1', name: 'Max', age: 28 },
    { id: 'vasdf1', name: 'Manu', age: 29 },
    { id: 'asdf11', name: 'Stephanie', age: 26 }
  ])
  const [otherState, setOtherState] = useState('some other value')
  const [showPersons, setShowPersons] = useState(false)

  const nameChangedHandler = (event, id) => {
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...persons[personIndex] };
    const _persons = [...persons];
    person.name = event.target.value;
    _persons[personIndex] = person;
    setPersons(_persons);
  };

  const deletePersonHandler = personIndex => {
    const _persons = [...persons];
    _persons.splice(personIndex, 1);
    setPersons(_persons);
  };

  const togglePersonsHandler = () => setShowPersons(!showPersons);
  
  const firstUpdate = useRef(true);

  useEffect(() => {
    console.log('[App.js] componentDidMount')
    return () => { console.log('[App.js] componentWillUnMount') }
  }, [])

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('componentDidUpdate');
  });

  console.log('[App.js] render');

  return (
    <div className={classes.App}>
      <Cockpit
        title={appTitle}
        showPersons={showPersons}
        persons={persons}
        clicked={togglePersonsHandler}
      />
      {showPersons && (
        <Persons
          persons={persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
      )}
    </div>
  );
}

export default App;

