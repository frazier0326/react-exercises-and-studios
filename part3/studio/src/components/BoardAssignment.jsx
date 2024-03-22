import { useState } from 'react';

const [boardName, setBoardName] = useState('no boards yet!');

export default function BoardAssignment () {
   const boards = [
      {
         label: "Easy Meals",
         value: "easyMeals"
      },
      {
         label: "Recipes for Josh",
         value: "recipesForJosh"
      },
      {
         label: "Favorite Dishes",
         value: "favoriteDishes"
      }
   ];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }


   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
