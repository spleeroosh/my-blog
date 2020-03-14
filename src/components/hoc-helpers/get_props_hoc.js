import React from 'react';

const getPropsHoc = (ChildComponent) => (props) => {
  return () => <ChildComponent {...props} />;
};

export default getPropsHoc;