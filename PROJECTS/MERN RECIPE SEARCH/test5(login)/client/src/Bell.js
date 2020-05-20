import React, { useEffect, useState } from "react";
import './Bell.css'
import Recipe from "./Recipe";
const Bell = () => {
    const B_ID = "8c8f22ea";
    const B_KEY = "899fda69feae7b5863f5d4eb3e524228	"; 
   

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")
      
      useEffect(  () => {
          getRecipes();
      },
      [query]);

      const getRecipes = async () => {
          const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${B_ID}&app_key=${B_KEY}`);
          const data = await response.json()
          console.log(data.hits);
          setRecipes(data.hits);
      };


const updateSearch = e => {
setSearch(e.target.value);

}



const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

    return (
           <div className = "Bell">
          <form className = "search-button" onSubmit={getSearch}>
              <input className="search-button"  type = "text" value = {search} onChange = {updateSearch}  background-color="white"
  color="white"/>
              <button className = "search-bar">Search</button>

          </form>

          <div className="rec">
          {recipes.map(recipe =>(
             <Recipe  
             key={recipe.recipe.label}
             title={recipe.recipe.label}
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}/>
          ))}
          </div>
           </div>
    );
}

export default Bell;