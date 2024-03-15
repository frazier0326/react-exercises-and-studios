import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "Red Velvet Cake with Cream Cheese Frosting";
let shortDescription = "Red velvet cake is much more than vanilla cake tinted red. This recipe produces the best red velvet cake with superior buttery, vanilla, and cocoa flavors, as well as a delicious tang from buttermilk. My trick is to whip the egg whites, which guarantees a smooth velvet crumb."

const RecipeAuthor = () => {
    let authorLink = "https://sallysbakingaddiction.com/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg";
    let authorName = "Sally McKenney";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's Baking Recipes </a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render() {
        return (
           <div> 
              <div>
                <h1>{recipeTitle}</h1>
                  <p>{shortDescription}</p>
             </div>
              <RecipeAuthor />
            </div>
        );
    }
}
export default RecipeDescription;