import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { AddTodo } from './types';

interface AddTodoFormProps {
	addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo('');
	};

	return (
		<form>
			<input
				id="addTodoInput"
				type="text"
				value={newTodo}
				onChange={handleChange}
			/>
			<button className="addBtn" type="submit" onClick={handleSubmit}>
				Add Todo
			</button>
		</form>
	);
};

export default AddTodoForm;
