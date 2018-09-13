import React, { Component } from 'react';

import { 
    RecipeItem, 
    RecipeTitle, 
    RecipeBody, 
    RecipeFooter, 
    RecipeIngridients, 
    RecipeSubtitle, 
    AddTitle, 
    SmallTitle
}  from '../styles.js';

class Recipe extends Component {
 
    showModal = () => {
        let Modals = document.getElementsByClassName('modal');
        Modals[0].style.display = 'block';
    }

    hideModal = () => {
        let Modals = document.getElementsByClassName('modal');
        Modals[0].style.display = 'none';
    }

    render() {
        return (
            <div className='row'>
            <RecipeItem className='col-sm-offset-2 col-sm-8'> 
                <RecipeTitle>
                Also Test 
                <i className="fa fa-trash"></i>
                <i className="fa fa-pencil-square-o"></i>
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
                <i className="fa fa-plus-square-o" onClick={this.showModal}></i> 
                </RecipeFooter>
            </RecipeItem>
            <div className='modal'>
                <span className='modal-close' onClick={this.hideModal}>&times;</span>
                <AddTitle>Add a recipe</AddTitle>
                <SmallTitle>Recipe</SmallTitle>
                <SmallTitle>Ingridients</SmallTitle>
                <SmallTitle>Directions</SmallTitle>
            </div>
            </div>
        )
    }
}

export default Recipe;