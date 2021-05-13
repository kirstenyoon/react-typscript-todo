import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../src/App.tsx';
import TodoList from '../src/TodoList.tsx';
import TodoListItem from '../src/TodoListItem.tsx';
import AddTodoForm from '../src/AddTodoForm.tsx';

describe('TodoListItem Component', () => {
	let mocktoggleComplete = jest.fn();
	let TodoListItemProps = {
		todo: { text: 'Walk the dog', complete: true },
		toggleComplete: 'mocktoggleComplete',
	};

	const wrapper = shallow(<TodoListItem {...TodoListItemProps} />);

	it('TodoListItem includes html elements', () => {
		expect(wrapper.find('li').length).toEqual(1);
		expect(wrapper.find('label').length).toEqual(1);
		expect(wrapper.find('input').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
		expect(wrapper.find('svg').length).toEqual(1);
		expect(wrapper.find('path').length).toEqual(1);
	});

	it('TodoListItem includes correct html innerText', () => {
		expect(wrapper.find('li').text()).toEqual('Walk the dog');
		expect(wrapper.find('label').text()).toEqual('Walk the dog!');
	});
});

describe('TodoListItem Component', () => {
	let mocktoggleComplete = jest.fn();
	let TodoListItemProps = {
		todo: { text: 'Make app', complete: false },
		toggleComplete: 'mocktoggleComplete',
	};

	const wrapper = shallow(<TodoListItem {...TodoListItemProps} />);

	it('TodoListItem includes html elements', () => {
		expect(wrapper.find('li').length).toEqual(1);
		expect(wrapper.find('label').length).toEqual(1);
		expect(wrapper.find('input').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
		expect(wrapper.find('svg').length).toEqual(1);
		expect(wrapper.find('path').length).toEqual(1);
	});

	it('TodoListItem includes correct html innerText', () => {
		expect(wrapper.find('li').text()).toEqual('Make app');
		expect(wrapper.find('label').text()).toEqual('Make app');
	});
});
