import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import Home from '../home';
import Posts from '../posts';
import LogInForm from '../log-in-form';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='main-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Posts} />
          <Route path='/login' component={LogInForm} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
