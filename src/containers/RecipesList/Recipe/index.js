import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRecipes } from '../selectors';
import formDefault from '../actions';
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
  componentDidMount() {
    console.log(this.props.onFormDefault);
  }

  showModal = () => {
    const Modals = document.getElementsByClassName('modal');
    Modals[0].style.display = 'block';
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
        <RecipeNew />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recipesList: selectRecipes,
});

const mapDispatchToProps = {
  onFormDefault: formDefault,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
