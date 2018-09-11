import React, { Component } from 'react';

import { RecipeItem, RecipeTitle, RecipeBody, RecipeFooter, RecipeIngridients, RecipeSubtitle }  from '../styles.js';

class Recipe extends Component {
    render() {
        return (
            <div className='row'>
            <RecipeItem className='col-sm-offset-2 col-sm-8'> 
                <RecipeTitle>
                Also Test 
                <i class="fa fa-trash"></i>
                <i class="fa fa-pencil-square-o"></i>
                </RecipeTitle>
                <RecipeBody>
                <RecipeSubtitle>Ingridients</RecipeSubtitle>
                <RecipeIngridients>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                </RecipeIngridients>
                <RecipeSubtitle>Directions</RecipeSubtitle>
                <RecipeIngridients>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                    <li>testing purposes</li>
                </RecipeIngridients>
                </RecipeBody>
                <RecipeFooter>
                <i class="fa fa-plus-square-o"></i> 
                </RecipeFooter>
            </RecipeItem>
            </div>
        )
    }
}

export default Recipe;