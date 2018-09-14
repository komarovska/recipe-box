import defaultRecipes from 'constants';

const initialState = {
    Recipes: {}
}
const RecipeReducer = (state = initialState) => {

        console.log(defaultRecipes);
        return state;
}



export default RecipeReducer;