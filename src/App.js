import React from 'react';

// styling
import './App.css';

// components 
import RecipeContainer from './recipe-container/RecipeContainer';
import Navbar from './navbar/Navbar';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <RecipeContainer/>

    </div>
  );
}

export default App;
