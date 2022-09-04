import React from 'react';
import Todo from './Todo';

export default function TodoList({todos}) {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) =>{
       return  <Todo key={todo.id} title={todo.title} />
      })}
    </div>
  )
}
