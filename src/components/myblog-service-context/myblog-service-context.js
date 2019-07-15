import React from 'react';

const {
  Provider: MyBlogServiceProvider,
  Consumer: MyBlogServiceConsumer
} = React.createContext();

export {
  MyBlogServiceProvider,
  MyBlogServiceConsumer
};