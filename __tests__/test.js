import 'js-polyfills/html';

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyForm from '../src/js/components/Form';

Enzyme.configure({ adapter: new Adapter() });

test('MyForm', () => {
  const wrapper = mount(<MyForm />);
  expect(wrapper.render()).toMatchSnapshot();

  const input = wrapper.find('form');
  input.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();
});
