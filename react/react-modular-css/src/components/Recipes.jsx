import { recipes as DATA_RECIPES } from "../data/data";
import { Fragment } from "react";
import classes from "../assets/styles/Recipes.module.css";

export function Recipes (){

    //DATA_RECIPES
    const jsxList = DATA_RECIPES.map( (recipe)=>{
        return (
        
        <div key={recipe.id} className={classes.Recipes}>
            <h2>{recipe.name}</h2>
            <ul>
                { recipe.ingredients.map(  (ingredient)=>{
                    return (
                        <li key={ingredient}>
                            {ingredient}
                        </li>
                    )
                }  ) } 
            </ul>    
        </div>
        
        )
    }  )

    //[ <div key="">greeksalad</div>, <div>Hawaiian</div> ]

    return (
        <div>
            {jsxList}
        </div>
    )

}