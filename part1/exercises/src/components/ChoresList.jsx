import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {

   let chores = ["Wash Dishes", "Clean Bathroom", "Take Out Trash"];

   return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ol>
         
      </div>      
   );
   // return <p>No content is here!</p>;
}

