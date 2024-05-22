import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo';
import AddTodoComp from './components/AddTodo';

export default function App() {
  return (
    <div className="App">
      <AddTodoComp />
      <Todo />
    </div>
  );
}
