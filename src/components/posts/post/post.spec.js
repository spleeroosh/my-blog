import React from 'react';
import renderer from 'react-test-renderer';
import Post from './post';
describe('Counter', () => {
  const post = {
          id: '1',
          title: 'post-title',
          content: 'post-content',
          date: new Date()
        },
        user = {
          id: '1',
          userName: 'Pavel'
        };
  
  test('snapshot renders', () => {
    const component = renderer.create(<Post post={post} user={user} onDeletePost={()=>{}}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});