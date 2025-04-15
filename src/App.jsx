import './component/todo/todo.css'
import './styles/app.css'
import AddInput from './component/todo/AddInput'
import TodoList from './component/todo/ListValue'
import ReactImg from './assets/react.svg'
import { useState } from 'react'
import Header from './component/layout/header'
import Footed from './component/layout/footed'

function App() {

  const [TodoLists, setTodoList] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Learn Nodejs' },
    { id: 3, name: 'Learn Express' },
  ])

  return <>
    <Header />
    <div className="todo-container">
      <p className="todo-title">todo list</p>
      <AddInput />
      <TodoList
        TodoList={TodoLists}
      />
      <img src={ReactImg} alt="react" className="logo" />
    </div>
    <Footed />
  </>


}

export default App
