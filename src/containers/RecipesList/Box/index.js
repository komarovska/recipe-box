import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Title, List } from '../styles';
import { selectRecipes } from '../selectors';
import { showRecipe } from '../actions';

const Box = ({ recipes, onShowRecipe }) => (
  <div className="row">
    <Title>
      Recipe Box
    </Title>
    <List className="col-sm-offset-2 col-sm-8">
      {recipes.map(recipe => (
        <li className="testli">{recipe.name}</li>
      ))}

    </List>

  </div>
);

Box.propTypes = {
  recipes: propTypes.object,
  onShowRecipe: propTypes.func,
};

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

const mapDispatchToProps = {
  onShowRecipe: showRecipe,
};
/*  class Box extends Component {
  componentDidMount() {
    formDefault();
  } 

  render() {
    return (
      <div className="row">
        <Title>
                    Recipe Box
        </Title>
        <List className="col-sm-offset-2 col-sm-8">

          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>
          <li className="testli">test</li>

        </List>

      </div>
    );
  }
} */

export default connect(mapStateToProps, mapDispatchToProps)(Box);
