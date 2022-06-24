import React, { useEffect } from 'react';

import classes from './Person.css';

const person = ({ click, name, age, changed, children }) => {

  useEffect(() => {
    console.log('[Person.js] componentDidMount');
    return () => console.log('[Person.js] componentWillUnMount');
  }, [])

  console.log('[Person.js] rendering...');

  return (
    <div className={classes.Person}>
      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
