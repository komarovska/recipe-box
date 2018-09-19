import {
  defaultRecipes,
  FETCH_ALL,
} from 'constants';

const formDefault = () => {
  const data = defaultRecipes;
  return ({
    type: FETCH_ALL,
    payload: data,
  });
};

export default formDefault;
