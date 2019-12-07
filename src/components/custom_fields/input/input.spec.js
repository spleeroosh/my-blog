import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from './input';
describe('Counter', () => {
  const type = 'text', 
        placeholder = 'insert your text', 
        title = 'title',
        small_text = 'small text', 
        label = 'label', 
        class_name = 'text input', 
        onInputChange = function() {};

  test('snapshot renders', () => {
    const component = renderer.create(<Input 
        type={type}
        placeholder={placeholder}
        title={title}
        small_text={small_text}
        label={label}
        class_name={class_name}
        onInputChange={onInputChange} 
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});