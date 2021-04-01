import React from 'react'

import { Provider } from './store'
import TodoList from './TodoList'

import { NewProvider } from '../newTodo/store'
import NewTodoList from '../newTodo/TodoList'

const App = () => (
  <NewProvider>
    <NewTodoList />
  </NewProvider>
)

export default App
