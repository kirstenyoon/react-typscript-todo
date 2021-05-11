import React from 'react';
// import { Todo, ToggleComplete } from './types';
import TodoListItem from './TodoListItem';

interface TodoListProps {
	todos: Array<Todo>;
	toggleComplete: ToggleComplete;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
	return (
		<ul className="todoList">
			{todos.map((todo, i) => (
				<TodoListItem
					key={'todoItem' + i}
					todo={todo}
					toggleComplete={toggleComplete}
				/>
			))}
		</ul>
	);
};

export default TodoList;
