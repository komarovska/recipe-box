import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';
import SHOW_DEFAULT from '../containers/RecipesList/constants';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), thunk)(createStore);

const normalState = {
  recipes: {
    filter: SHOW_DEFAULT,
    recipes: {
      1: {
        id: 1,
        name: 'Easy Chocolate Pie',
        ingridients: [
          '1 (12 ounce) can evaporated milk',
          '1 (5.9 ounce) package chocolate instant pudding mix',
          '1 (6.5 ounce) can whipped cream',
          '1/2 cup miniature semi-sweet chocolate chips (optional)',
          '1 (9 inch) graham cracker pie crust',
          'Another can of whipped cream for garnish (optional)',
        ],
        directions: [
          'Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended.',
          'Add contents of whipped cream can; stir gently but quickly until well blended. Pour into crust; cover.',
          'Refrigerate 6 hours, or until set. Cut into 8 slices to serve. Garnish if desired.',
        ],
      },
      2: {
        id: 2,
        name: 'Lime Chicken Tacos',
        ingridients: [
          '1 1/2 pounds skinless, boneless chicken breast meat - cubed',
          '1/8 cup red wine vinegar',
          '1/2 lime, juiced',
          '1 teaspoon white sugar',
          '1/2 teaspoon ground black pepper',
        ],
        directions: [
          'Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar oregano.',
          'Heat an iron skillet over medium heat. Place a tortilla in the pan, warm. Serve lime chicken mixture.',
        ],
      },
      3: {
        id: 3,
        name: 'Artichoke Dip',
        ingridients: [
          '1 8oz package soft cream cheese',
          '4oz mayonnaise',
          '1/4 Cup Fresh Grated Parmesan Cheese',
          '3/4 Cup dairy sour cream',
          '1/4 Cup fresh chopped chives',
        ],
        directions: [
          'Soften the cream cheese before mixing.',
          'Rinse well, then dice the artichokes into small ½” size pieces.',
          'Into a mixing bowl place the softened cream cheese. Mix in the mayonnaise, sour cream, the Parmesan.',
          'When the mixture is fairly well blended, spoon into a 9” round glass pie dish.',
          'Set Oven to Bake at 350 degrees.',
        ],
      },
    },
  },
};

const store = createStoreWithMiddleware(rootReducer, normalState);

export default store;
