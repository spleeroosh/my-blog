import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import Counter from '../counter';
import Posts from '../posts';
import LogInForm from '../log-in-form';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/counter' component={Counter} />
          <Route path='/blog' component={Posts} />
          <Route path='/login' component={LogInForm} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
