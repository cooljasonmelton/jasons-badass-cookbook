import React from 'react';
import '../App.css';

const Recipe = () => {
  return (
    <div className="Recipe">
        <h1>recipe name</h1>
        <h3>Ingredients:</h3>
        <ul>
            <li>ingredient 1</li>
            <li>ingredient 2</li>
            <li>ingredient 3</li>
            <li>ingredient 5</li>
        </ul>
        <h3>Instructions:</h3>
        <ul>
            <li>direction one</li>
            <li>direction two</li>
            <li>direction three</li>
        </ul>
        <h3>Notes:</h3>
        <p>Notes about other stuff you could do</p>
    </div>
  );
}

export default Recipe;
