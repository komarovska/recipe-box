import React, { Component } from 'react';

import { RecipeItem, RecipeTitle, RecipeBody, RecipeFooter }  from '../styles.js';

class Recipe extends Component {
    render() {
        return (
            <div className='row'>
            <RecipeItem className='col-sm-offset-2 col-sm-8'> 
                <RecipeTitle></RecipeTitle>
                <RecipeBody></RecipeBody>
                <RecipeFooter></RecipeFooter>
            </RecipeItem>
            </div>
        )
    }
}

export default Recipe;