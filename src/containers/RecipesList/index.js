import React, { Component } from 'react';
import Recipe from './Recipe';
import Box from './Box';

export default class RecipesList extends Component {
    render () {
        return (
            <div className='container'>
            <Box />
            <Recipe />
            </div>
        )
    }

}