import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setinputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  return (
    <div className="App">
      <header>
        <h1>
          Todo List
        </h1>
      </header>
      <div>
        <span>Add 👉 {inputText} </span>
      </div>
      <Form 
        inputText={inputText} 
        setinputText={setinputText} 
        todos={todos} 
        setTodos={setTodos} 
        />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        setEditingText={setEditingText}
        editingText={editingText}
       />
    </div>
  );
}

export default App;
