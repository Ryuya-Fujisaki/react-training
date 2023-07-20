import { useState } from 'react'
import './App.css'
import Test from "./components/Test";
import Test2 from "./components/Test2";

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [todo, setTodo] = useState<string>('')

  return (
    <>
      <input type="text" onChange={(e) => setTodo(e.target.value)}/>
      <button>登録</button>
      <ul>
        <li>hoge</li>
        <li>huuu</li>
        <li>fooo</li>
      </ul>
    </>
  )
}

export default App
