import React, { useState } from 'react'
import './ToDoList.css'

function ToDoList() {
  const [task, setTask] = useState(['Eat Brekfast', 'Walk the dog', 'Wash dishes']);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value)
    
  }
  function addTask() {
if(newTask.trim() !== ""){ setTask(t => [...t, newTask]);
    setNewTask('');}
    
  }
  function deleteTask(index) {

    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
    
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [ updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]] 
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length -1) {
      const updatedTask = [...task];
      [ updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]] 
      setTask(updatedTask);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To Do List</h1>
      <div>
        <input type='text' placeholder='Enter a task...'
          value={newTask} onChange={handleInputChange}>
          </input>
        <button className='add-button'
          onClick={addTask}
        >Add</button>

      </div>
      <ol>
        {task.map((task, index) => <li key={index}>
          <span className='text'>{task}</span>
          <button className='delete-button' onClick={() =>  deleteTask(index)}>Delete
          </button>

          <button className='move-button' onClick={() =>  moveTaskUp(index)}>Up
          </button>

          <button className='move-button' onClick={() =>  moveTaskDown(index)}>Down
          </button>
        </li>)}
      </ol>
      
      
    </div>
  )
}

export default ToDoList
