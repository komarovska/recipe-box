import {
  ADD_RECIPE,
  SHOW_RECIPE,
  DELETE_RECIPE,
} from './constants';

export const addRecipe = ({ title, ingridients, directions }) => ({
  type: ADD_RECIPE,
  title,
  ingridients,
  directions,
});

export const deleteRecipe = ({ title, ingridients, directions }) => ({
  type: DELETE_RECIPE,
  title,
  ingridients,
  directions,
});

export const showRecipe = Id => ({
  type: SHOW_RECIPE,
  id: Id,
});
