import React, { useEffect, useLayoutEffect, useRef } from 'react';

import Person from './Person/Person';

const Persons = ({ persons, clicked, changed }) => {

  console.log('[Persons.js] rendering...');

  useEffect(() => {
    console.log('[Persons.js] componentDidMount');
    return () => console.log('[Persons.js] componentWillUnMount');
  }, [])

  //componentDidUpdate 
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('componentDidUpdate');
  });

  return persons.map((person, index) =>
    <Person
      click={() => clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={event => changed(event, person.id)}
    />
  )

}

export default Persons;
