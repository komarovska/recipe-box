import {
  ADD_RECIPE,
  SHOW_RECIPE,
  GET_DEFAULT,
} from './constants';

export const addRecipe = ({ title, ingridients, directions }) => ({
  type: ADD_RECIPE,
  title,
  ingridients,
  directions,
});

export const deleteRecipe = ({ title, ingridients, directions }) => {
  
};

export const showRecipe = Id => ({
  type: SHOW_RECIPE,
  id: Id,
});

export const showDefault = ({ title, ingridients, directions }) => ({
  type: GET_DEFAULT,
  title,
  ingridients,
  directions,
});
