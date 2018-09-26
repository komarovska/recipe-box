import React, { Component } from 'react';
import propTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectRecipes, selectDetailed } from '../selectors';
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
    return (
      <div className="row">
        <RecipeItem className="col-sm-offset-2 col-sm-8">
          <RecipeTitle>
            {recipes[1].title}
            <i className="fa fa-trash" />
            <i className="fa fa-pencil-square-o" />
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
  selected: selectDetailed,
});

const mapDispatchToProps = {
  onShowRecipe: showRecipe,
};

Recipe.propTypes = {
  recipes: propTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
