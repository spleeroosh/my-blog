import React from 'react';
import { MyBlogServiceConsumer } from '../myblog-service-context';
const withMyBlogService = () => (Wrapped) => {

  return (props) => {
    return (
      <MyBlogServiceConsumer>
        {
          (myBlogService) => {
            return(
              <Wrapped {...props} myBlogService={myBlogService}/>
            );
          }
        }
      </MyBlogServiceConsumer>
    )
  }
};

export default withMyBlogService;