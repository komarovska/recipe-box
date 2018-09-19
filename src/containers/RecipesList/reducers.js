import { FETCH_ALL } from 'constants';

const initialState = {
  Recipes: {},
  sortingType: 'ALL',
};
const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ALL}_FULFILED`:
      return { ...state, Recipes: action.payload, sortingType: 'ALL' };
    default:
      return state;
  }
};

export default RecipeReducer;
