import { FETCH_ALL, defaultRecipes } from 'constants';

const initialState = {
    Recipes: {},
    sortingType: 'all'
}
const RecipeReducer = (state = initialState, action) => {
        switch (action.type) {
            case `${FETCH_ALL}_FULFILED`:
                const recipesList = action.payload;
                return { ...state, Recipes: recipesList, sortingType: 'all' };
            default:
                return state;
        }
        
}

export default RecipeReducer;