import React, { useState } from 'react';

export const EditTodoForm = ({ task, editTask }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editTask(value, task.id);
    setValue(""); // Clear input after submitting
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Update Task'
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};
