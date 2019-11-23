import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import Counter from '../counter';
import Home from './../home';
import Posts from '../posts';
import LogInForm from '../log-in-form';
import TestFirebase from '../test-firebase';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='main-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/blog' component={Posts} />
          <Route path='/login' component={LogInForm} />
          <Route path='/test' component={TestFirebase} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
