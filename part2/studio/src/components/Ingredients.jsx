import recipedata from './recipe.json';

function IngredientList() {
  let ingredientListItems = recipedata.map(recipe => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });
  });

   return  <h3>{ingredientListItems}</h3>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 