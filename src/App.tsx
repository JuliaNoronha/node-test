import { useState } from 'react'
import './App.css'

type Todo = {
  id: number
  title: string
  completed: boolean
}
function App() {
  const [todolist, setTodolist] = useState([] as Todo[])

const addTodo = (event: React.FormEvent) => {
  event.preventDefault()
  const target = event.target as typeof event.target & {
    todo: { value: string }
  }
  const value = target.todo.value
  {
    setTodolist([...todolist, { id: 1, title: value, completed: false }])
  }
}
return (
  <>
    <div className="App">
      <h1>Todo list</h1>
      <div>
        <form onSubmit={addTodo}>
          <input type="text" name="todo" />
          <button>Adicionar</button>
        </form>
      </div>
    </div>
    
  </>
)
}
export default App
