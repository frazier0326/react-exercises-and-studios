import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://bellyfull.net/chicken-alfredo-recipe/";
   let authorPhoto = "https://bellyfull.net/wp-content/uploads/2016/08/Author-Photo-blog.jpg";
   let authorName = "Amy Flanigan";

   return (
      <div>
         <img src={authorPhoto} alt = "Amy" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Amy Flanigan's Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["chicken breasts", "italian seasoning", "fettuccine noodles", "alfredo sauce", "salt"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chicken Alfredo </h1>
            <p>This easy Chicken Alfredo recipe includes golden pan-fried seasoned chicken 
               breasts and tender noodles, coated in the most dreamy cream sauce ever. A showstopper 
               meal and it’s all done in just over 30 minutes! </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-768x1024.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
