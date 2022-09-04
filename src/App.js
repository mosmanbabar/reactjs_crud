import {useState} from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      title: "play",
      isCompleted: false,
    },
    {
      id: 2,
      title: "play Cricekt",
      isCompleted: true,
    }
  ])
  // add a todo
  const addTodo = (text) =>{
    const newTodo ={
      id:5,
      title: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo]);
  }
  return (
    <div>
     <h1>
       <TodoForm addTodo={addTodo} />
       <TodoList todos={todos} />
     </h1>
    </div>
  );
}

export default App;
