import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import Todo from '../components/Todo/Todo';


it('can add a todo', () => {
  const initalState = {
    todos: []
  };
  const wrapper = mount(
    <Root initalState={initalState}>
      <App />
    </Root>
  );
  wrapper.find('input').forEach(input => {
    input.simulate('change', {
      target: {
        value: 'test'
      }
    });
  });
  wrapper.update();
  wrapper.find('form').simulate('submit');
  wrapper.update();
  expect(wrapper.find(Todo).length).toEqual(1);
});

it('can delete a todo', () => {
  const initalState = {
    todos: [
      { id: 1, title: 'todo 1', description: 'test', completed: false },
      { id: 2, title: 'todo 2', description: 'test', completed: false },
      { id: 3, title: 'todo 3', description: 'test', completed: false },
    ]
  };
  const wrapper = mount(
    <Root initalState={initalState}>
      <App />
    </Root>
  );
  wrapper.find('.btn-danger').first().simulate('click');
  wrapper.update();
  expect(wrapper.find(Todo).length).toEqual(2);
});

it('can complete a todo', () => {
  const initalState = {
    todos: [
      { id: 1, title: 'todo 1', description: 'test', completed: false }
    ]
  };
  const wrapper = mount(
    <Root initalState={initalState}>
      <App />
    </Root>
  );
  wrapper.find('.btn-complete').first().simulate('click');
  wrapper.update();
  expect(wrapper.find(Todo).props().completed).toEqual(true);
});

it('can set a todo to incomplete and delete it', () => {
  const initalState = {
    todos: [
      { id: 1, title: 'todo 1', description: 'test', completed: true }
    ]
  };
  const wrapper = mount(
    <Root initalState={initalState}>
      <App />
    </Root>
  );
  wrapper.find('.btn-complete').first().simulate('click');
  wrapper.update();
  expect(wrapper.find(Todo).length).toEqual(1);
  expect(wrapper.find(Todo).props().completed).toEqual(false);
  wrapper.find('.btn-danger').first().simulate('click');
  wrapper.update();
  expect(wrapper.find(Todo).length).toEqual(0);
});

afterEach(() => {
  wrapper.unmount();
});