import { createSelector } from 'reselect';

export const selectRecipes = state => state.RecipeReducer.recipes;
export const selectDetailed = state => state.RecipeReducer.detailedRecipe;

export const selectDetailedRecipe = createSelector(
  [selectRecipes, selectDetailed],
  (recipes, detailedRecipe) => {
    return recipes[detailedRecipe];
  },
);
