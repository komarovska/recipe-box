import React, { Component } from 'react';
import propTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectRecipes, selectDetailedRecipe } from '../selectors';
import { showRecipe } from '../actions';
import RecipeNew from '../RecipeNew/index';

import {
  RecipeItem,
  RecipeTitle,
  RecipeBody,
  RecipeFooter,
  RecipeIngridients,
  RecipeSubtitle,
} from '../styles';

class Recipe extends Component {
  showModal = () => {
    const Modals = document.getElementsByClassName('modal');
    Modals[0].style.display = 'block';
  }

  render() {
    const { recipes, onShowRecipe, selected } = this.props;
    const { title, ingredients, directions, id } = selected;
    return (
      <div className="row">
        <RecipeItem className="col-sm-offset-2 col-sm-8">
          <RecipeTitle>
            {selected.title}
            <i className="fa fa-trash" />
            <i className="fa fa-pencil-square-o" />
          </RecipeTitle>
          <RecipeBody>
            <RecipeSubtitle>Ingridients</RecipeSubtitle>
            <RecipeIngridients>
              {recipes[1].ingridients.map(ingridient => (
                <li key={ingridient}>{ingridient}</li>
              ))}
            </RecipeIngridients>
            <RecipeSubtitle>Directions</RecipeSubtitle>
            <RecipeIngridients>
              {recipes[1].directions.map(direction => (
                <li key={direction}>{direction}</li>
              ))}
            </RecipeIngridients>
          </RecipeBody>
          <RecipeFooter>
            <button type="button" className="fa fa-plus-square-o" onClick={this.showModal} />
          </RecipeFooter>
        </RecipeItem>
        <RecipeNew />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
  selected: selectDetailedRecipe,
});

const mapDispatchToProps = {
  onShowRecipe: showRecipe,
};

Recipe.propTypes = {
  recipes: propTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
