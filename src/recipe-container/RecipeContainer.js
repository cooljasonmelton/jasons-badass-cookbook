import React from 'react';

// styling
import '../App.css';

// components
import Recipe from './Recipe';
import RecipeList from './RecipeList';

const RecipeContainer = () => {
  return (
    <div className="RecipeContainer">
        <RecipeList/>
        <Recipe/>
    </div>
  );
}

export default RecipeContainer;
