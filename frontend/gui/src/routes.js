import React from 'react';
import {Route} from 'react-router-dom';
import ArticleListView from './components/containers/ArticleListView';
import ArticleDetailView from './components/containers/ArticleDetailView';

const BaseRouter = () => {
    return (
        <div>
<Route exact path='/' component={ArticleListView} />
<Route exact path='/:articleID' component={ArticleDetailView} />


        </div>
    )
}

export default BaseRouter
