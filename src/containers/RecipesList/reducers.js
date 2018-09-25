import { v4 } from 'node-uuid';

import { defaultRecipes, ADD_RECIPE, SHOW_RECIPE, EDIT_RECIPE, GET_DEFAULT } from './constants';

const getNextRecipeId = () => v4();

const initialState = {
  recipes: defaultRecipes,
  detailedRecipe: 1,
};

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return { ...state,
        recipes: [
          ...initialState.recipes,
          {
            id: getNextRecipeId(),
            title: action.title,
            ingridients: action.ingridients,
            directions: action.directions,
          },
        ],
      };
    case SHOW_RECIPE:
      return {
        ...state,
        shownRecipe: action.id,
      };
    // case GET_DEFAULT:
      // return state;
    default:
      return state;
  }
};

export default RecipeReducer;
