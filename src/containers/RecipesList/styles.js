import styled from 'styled-components';

import {
    lightBeige,
    darkBlue,
    bordoBrown,
  } from './constants';

export const Title = styled.div `
    margin-top: 70px;
    font-size: 40px;
    color: ${lightBeige};
    text-align: center;
    font-family: 'Chango', cursive;
`

export const RecipeTitle = styled.div `
    font-family: 'Boogaloo', cursive;
    `

export const List = styled.ul`
    margin-top: 20px;
    height: 120px;
    border-radius: 10px;
    border: 6px solid ${darkBlue};
    overflow: scroll;
    list-style-type: none;
    padding: 0;
`
export const RecipeItem = styled.div`
    margin-top: 10px;
    height: 440px;
    border-radius: 10px;
    border: 6px solid ${darkBlue};
    overflow: scroll;
    `

export const RecipeBody = styled.div`

`

export const RecipeFooter = styled.div`

`