import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Title, List } from '../styles';
import selectRecipes from '../selectors';
import { showRecipe, showDefault } from '../actions';

class Box extends Component {
  componentDidMount() {
    const { onShowDefault } = this.props;
    onShowDefault();
  }

  render() {
    const { recipes } = this.props;
    return (
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
  }
}

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

const mapDispatchToProps = {
  onShowRecipe: showRecipe,
  onShowDefault: showDefault,
};

Box.propTypes = {
  onShowDefault: propTypes.func,
  recipes: propTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
