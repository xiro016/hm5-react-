import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import TodoPage from './page/TodoPage';

export const Context = createContext(null)

function App() {

  const [search, setSearch] = useState('')
  const [ todoApi, setTodoApi ] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=2&_page=1')
      .then(response => response.json())
      .then(json => setTodoApi(json))
  }, [])

  return (
    <Context.Provider value={{ search, setSearch, todoApi, setTodoApi }}>
    <div className='App'>
      <div className='container'>
        <TodoPage/>
      </div>
    </div>
    </Context.Provider>
  )
}

export default App;