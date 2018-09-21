import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeReducer from './containers/RecipesList/reducers';

export default combineReducers({
  RecipeReducer,
  form: formReducer,
});
