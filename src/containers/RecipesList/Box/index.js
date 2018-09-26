import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Title, List } from '../styles';
import { selectRecipes, selectDetailed } from '../selectors';
import { showRecipe } from '../actions';

const Box = ({ recipes, onShowRecipe }) => (
  <div className="row">
    <Title>
    Recipe Box
    </Title>
    <List className="col-sm-offset-2 col-sm-8">
      {recipes.map(recipe => (
        <button type="button" onClick={onShowRecipe(recipe.id)} className="testli">{recipe.title}</button>
      ))}
    </List>
  </div>
);

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

const mapDispatchToProps = {
  onShowRecipe: showRecipe,
};

Box.propTypes = {
  recipes: propTypes.array,
  onShowRecipe: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
