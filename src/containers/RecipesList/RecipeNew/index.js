import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';
import {
  AddTitle,
  SmallTitle,
} from '../styles';

class RecipeNew extends Component {
  hideModal = () => {
    const Modals = document.getElementsByClassName('modal');
    Modals[0].style.display = 'none';
  }

  renderTitleField(field) {
    return (
      <div>
        <input
          className="input-title"
          type="text"
          placeholder="Add a recipe title"
          {...field.input}
        />
      </div>
    );
  }

  renderIngridientsField(field) {
    return (
      <div>
        <input
          className="input-ingridients"
          type="text"
          placeholder="Add recipe's ingridients separated by /"
          {...field.input}
        />
      </div>
    );
  }

  renderDirectionsField(field) {
    return (
      <div>
        <input
          className="input-directions"
          type="text"
          placeholder="Add recipe's instructions separated by /"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.addRecipe(values);
    console.log();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="modal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <button type="button" className="modal-close" onClick={this.hideModal}>&times;</button>
        <AddTitle>Add a recipe</AddTitle>
        <SmallTitle>Recipe</SmallTitle>
        <Field
          name="title"
          component={this.renderTitleField}
        />
        <SmallTitle>Ingridients</SmallTitle>
        <Field
          name="ingridients"
          component={this.renderIngridientsField}
        />
        <SmallTitle>Directions</SmallTitle>
        <Field
          name="directions"
          component={this.renderDirectionsField}
        />
        <input type="submit" value="Add" />
        <input type="submit" value="Close" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'RecipeNewForm',
})(
  connect(null, { addRecipe })(RecipeNew),
);
