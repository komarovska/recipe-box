import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index.js';
import Box from './containers/RecipesList/Box/index.js';
import Recipe from './containers/RecipesList/Recipe/index.js';
//import { Provider } from 'react-redux';
//import CreateStore from './store/index.js';
//import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(

    <BrowserRouter>
        <div>
        <Route path="/" component={App}/>
        <Route path="/recipe" component={Recipe}/>
        <Route path="/box" component={Box}/>
        </div>
    </BrowserRouter>, 
    
    document.getElementById('root'));
