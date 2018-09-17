import {
    defaultRecipes,
    FETCH_ALL,
} from 'constants';

export const formDefault = () => {
    const data = defaultRecipes;
        return ({
            type: FETCH_ALL,
            payload: data
        });
}