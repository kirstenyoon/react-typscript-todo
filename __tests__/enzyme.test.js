import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/App.tsx';
import TodoList from '../src/TodoList.tsx';
import TodoListItem from '../src/TodoListItem.tsx';
import AddTodoForm from '../src/AddTodoForm.tsx';

configure({ adapter: new Adapter() });

describe('App Component', () => {
	const wrapper = shallow(<App />);

	it('Contains TodoList component', () => {
		expect(wrapper.find(TodoList).length).toBe(1);
	});

	it('Contains AddTodoForm component', () => {
		expect(wrapper.find(AddTodoForm).length).toBe(1);
	});
});

describe('TodoList Component', () => {
	let mocktoggleComplete = jest.fn();
	let TodoListProps = {
		todos: [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		],
		toggleComplete: 'mocktoggleComplete',
	};

	const wrapper = shallow(<TodoList {...TodoListProps} />);

	it('Contains TodoListItem component', () => {
		expect(wrapper.find(TodoListItem).length).toBe(2);
	});

	it('TodoList includes html elements', () => {
		expect(wrapper.find('ul').length).toEqual(1);
	});
});

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
	});

	it('TodoListItem includes correct html innerText', () => {
		expect(wrapper.find('li').text()).toEqual('Walk the dog');
		expect(wrapper.find('label').text()).toEqual('Walk the dog');
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
	});

	it('TodoListItem includes correct html innerText', () => {
		expect(wrapper.find('li').text()).toEqual('Make app');
		expect(wrapper.find('label').text()).toEqual('Make app');
	});
});

describe('AddTodoForm Component', () => {
	let mockaddTodo = jest.fn();
	let AddTodoFormProps = { addTodo: 'mockaddTodo' };

	const wrapper = shallow(<AddTodoForm {...AddTodoFormProps} />);

	it('AddTodoForm includes html elements', () => {
		expect(wrapper.find('form').length).toEqual(1);
		expect(wrapper.find('input').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('AddTodoForm includes correct html innerText', () => {
		expect(wrapper.find('form').text()).toEqual('Add Todo');
		expect(wrapper.find('button').text()).toEqual('Add Todo');
	});
});
