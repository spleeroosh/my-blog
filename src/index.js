import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import MyBlogService from './services/myblog-service';
import { MyBlogServiceProvider } from './components/myblog-service-context';

import store from './store';

const myBlogService = new MyBlogService();

ReactDOM.render(
  <Provider store={store}>
    <MyBlogServiceProvider value={myBlogService}>
      <Router>
        <App />
      </Router>
    </MyBlogServiceProvider>
  </Provider>, 
  document.getElementById('root'))



