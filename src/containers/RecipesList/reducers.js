import { v4 } from 'node-uuid';

import { defaultRecipes, ADD_RECIPE, SHOW_RECIPE, EDIT_RECIPE } from './constants';

const getNextRecipeId = () => v4();

const initialState = {
  recipes: defaultRecipes,
  detailedRecipe: 1,
};

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return { ...state,
        recipes: {
          ...initialState.recipes,
          [getNextRecipeId()]: {
            id: getNextRecipeId(),
            title: action.title,
            ingridients: action.ingridients,
            directions: action.directions,
          },
        },
      };
    case SHOW_RECIPE:
      return {
        ...state,
        shownRecipe: action.id,
      };
    default:
      return state;
  }
};

export default RecipeReducer;
