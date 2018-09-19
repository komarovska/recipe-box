import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRecipes } from '../selectors';
import formDefault from '../actions';

import {
  RecipeItem,
  RecipeTitle,
  RecipeBody,
  RecipeFooter,
  RecipeIngridients,
  RecipeSubtitle,
  AddTitle,
  SmallTitle,
} from '../styles';

class Recipe extends Component {
  componentDidMount() {
    console.log(this.props);
  }

    showModal = () => {
      const Modals = document.getElementsByClassName('modal');
      Modals[0].style.display = 'block';
    }

    hideModal = () => {
      const Modals = document.getElementsByClassName('modal');
      Modals[0].style.display = 'none';
    }

    render() {
      return (
        <div className="row">
          <RecipeItem className="col-sm-offset-2 col-sm-8">
            <RecipeTitle>
                Also Test
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
          <div className="modal">
            <button type="button" className="modal-close" onClick={this.hideModal}>&times;</button>
            <AddTitle>Add a recipe</AddTitle>
            <SmallTitle>Recipe</SmallTitle>
            <form action="">
              <input className="input-title" type="text" name="firstname" placeholder="Add a recipe title" />
            </form>
            <SmallTitle>Ingridients</SmallTitle>
            <form action="">
              <input
                className="input-ingridients"
                type="text"
                name="firstname"
                placeholder="Add recipe's ingridients separated by /"
              />
            </form>
            <SmallTitle>Directions</SmallTitle>
            <form action="">
              <input
                className="input-directions"
                type="text"
                name="firstname"
                placeholder="Add recipe's instructions separated by /"
              />
              <input type="button" value="Add" />
              <input type="button" value="Close" />
            </form>
          </div>
        </div>
      );
    }
}

const mapStateToProps = createStructuredSelector({
  recipesList: selectRecipes(),
});

const mapDispatchToProps = {
  onFormDefault: formDefault,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
