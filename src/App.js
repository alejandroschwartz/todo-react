import './App.css';

import TodoCounter from '../src/components/TodoCounter';
import TodoSearch from '../src/components/TodoSearch';
import TodoList from '../src/components/TodoList';
import TodoItem from '../src/components/TodoItem';
import CreateTodoButton from '../src/components/CreateTodoButton';

const todos = [
  { id: 1, text: 'Ver curso de react', completed: true },
  { id: 2, text: 'Asincronismos con javascript', completed: false },
  { id: 3, text: 'Manejo de la terminal y linea de comandos', completed: true },
  { id: 4, text: 'Estilos con css', completed: false }
]

function App() {
  return (
    <>
      <h1 className='title' >Listado de tareas</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(item => (
          <TodoItem key={item.id} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
