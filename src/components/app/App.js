import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import Counter from '../counter';
import BlogPost from './../blog-post';
import LogInForm from './../log-in-form';

import { 
  withMyBlogService,
  withData
} from './../hoc-helpers';


import './App.css';

const App = ({myBlogService}) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/counter' component={Counter} />
          <Route path='/blog' component={withData(BlogPost, myBlogService.getPosts)} />
          <Route path='/login' component={LogInForm} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default withMyBlogService()(App);
