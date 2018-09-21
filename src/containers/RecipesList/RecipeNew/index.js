import React, { Component } from 'react';
import { Field, reduxform } from 'redux-form';

import {
  AddTitle,
  SmallTitle,
} from '../styles';

export default class RecipeNew extends Component {
  hideModal = () => {
    const Modals = document.getElementsByClassName('modal');
    Modals[0].style.display = 'none';
  }

  render() {
    return (
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
    );
  }
}
