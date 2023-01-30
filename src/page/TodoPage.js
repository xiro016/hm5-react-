import { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import { useFilterTrue } from '../components/hooks/hooks';
import ModalWindow from '../components/ModalWindow';
import Pagination from '../components/Pagination';
import TodoList from '../components/TodoList';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

const TodoPage = () => {
  const [ todoList, setTodoList ] = useState(null) 
  const [ isShow, setIsShow ] = useState(false)
  const { search, setSearch } = useContext(Context)
  const [ sortBy, setSortBy ] = useState('abs') // abs || desc || letter
  const [ dataTask, setDataTask ] = useState({
    title: '',
    description: '',
  })
  const [ offset, setOffset ] = useState(0)

  const newArray = useFilterTrue(todoList || [])
  

  /* Handlers */
  const ClearTodo  = ()=>{
 
    const newTodo = todoList.filter((a)=>{
    if(a.completed == true){
   
    }
    else{
       return a
    }
    })
    setTodoList(newTodo)
    
    }
  const openWindowToEdit = (todo) => {
    setDataTask(todo)
    setIsShow(true)
  }
  const closeWindow = () => {
    setIsShow(prev => !prev)
    setDataTask({
      title: '',
      description: '',
    })
  }
  const handleOnChange = (e) => {
    setDataTask(prev => {
      return {...prev, [ e.target.name ]: e.target.value}
    })
  }


  /* Functions to change TODO LIST */
  const addTodo = (todo) => {
    const foundTask = todoList.find((item) => item.title === todo.title)
    if (foundTask?.title) {
      alert('Задача с таким полем уже есть!')
      return
    }
    setTodoList(prev => [...prev, { id: Date.now(), title: todo.title, description: todo.description ,completed:false}])
  }

  const editTodo = (todo) => {
    const newTasks = todoList.map((item) => {
      if (item.id === todo.id) {
        return todo
      } else {
        return item
      }
    })
    setTodoList(newTasks)
  }

  const deleteTodo = (todo) => {
    const newState = todoList.filter(item => item.id !== todo.id)
    setTodoList(newState)
  }

  function makeCompleted(id) {
    const newState = todoList.map((item) => {
      if (item.id === id) {
        return {...item, completed: !item.completed}
      }
      return {...item}
    })
    setTodoList(newState)
  }

  /* USE EFFECTS */
  useEffect(() => {
    const data = localStorage.getItem('data')
    setTodoList(JSON.parse(data) || [])
  }, [])

  useEffect(() => {
    if (todoList === null) {
      return
    }
    localStorage.setItem('data', JSON.stringify(todoList))
  }, [ todoList ])

  // limit offset 

  return (
    <>
      <ModalWindow isShow={isShow} editTodo={editTodo} dataTask={dataTask} handleOnChange={handleOnChange} addTodo={addTodo} closeWindow={closeWindow}/>
      <div className='flexWrapper'>
      <button type="reset" className='buttonAdd' onClick={ClearTodo}>Очистить</button>
        <Button handleDo={() => setSortBy('asc')}>По возрастанию</Button>
        <Button handleDo={() => setSortBy('desc')}>По убыванию</Button>
        <Button handleDo={() => setSortBy('letter')}>По алфавиту</Button>

        <Input className='inputSearch' value={search} handleOnChange={(e) => setSearch(e.target.value)}/>
        <Button handleDo={() => setIsShow(prev => !prev)}>
          Добавить таск
        </Button>
        <TodoList limit={2} offset={offset} sortBy={sortBy} todoList={todoList} makeCompleted={makeCompleted} openWindowToEdit={openWindowToEdit} deleteTodo={deleteTodo}/>
        <Pagination setOffset={setOffset} limit={2} length={todoList?.length}/>
      </div>
    </>
  )
} 

export default TodoPage;