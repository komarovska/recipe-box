import styled from 'styled-components';

import {
  lightBeige,
  darkBlue,
  bordoBrown,
} from './constants';

export const Title = styled.div`
    margin-top: 70px;
    font-size: 40px;
    color: ${lightBeige};
    text-align: center;
    font-family: 'Chango', cursive;
`;

export const RecipeTitle = styled.div`
    font-family: 'Boogaloo', cursive;
    padding-left: 10px;
    height: 60px;
    font-size: 35px;
    line-height: 60px;
    background-color: ${darkBlue};
    `;

export const List = styled.ul`
    margin-top: 20px;
    height: 120px;
    border-radius: 10px;
    border: 6px solid ${darkBlue};
    overflow: scroll;
    list-style-type: none;
    padding: 0;
`;
export const RecipeItem = styled.div`
    padding: 0;
    margin-top: 10px;
    height: 440px;
    color: ${lightBeige};
    border-radius: 10px;
    overflow: scroll;
    `;

export const RecipeBody = styled.div`
    height: 330px;
    background-color: ${bordoBrown};
    overflow: scroll;
`;

export const RecipeFooter = styled.div`
    height: 50px;
    background-color: ${darkBlue};
    padding-left: 20px;
    font-size: 35px;
    line-height: 50px;
`;

export const RecipeSubtitle = styled.div`
    padding: 10px 0 0 10px;
    font-family: 'Boogaloo', cursive;
    font-size: 25px;
`;

export const RecipeIngridients = styled.ul`
    font-size: 18px;
    padding-left: 30px;
`;
export const AddTitle = styled.div`
    font-family: 'Boogaloo', cursive;
    font-size: 28px;
    text-align: center;
    color: ${lightBeige};
`;

export const SmallTitle = styled.div`
    font-family: 'Boogaloo', cursive;
    font-size: 20px;
    text-align: center;
    color: ${lightBeige};  
`;
