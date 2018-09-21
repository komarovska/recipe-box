import {
  defaultRecipes,
  ALL,
} from 'constants';

const formDefault = () => async dispatch => {
  dispatch({
    type: ALL,
    payload: defaultRecipes,
  });
};

export default formDefault;
