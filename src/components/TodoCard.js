import Button from "./UI/Button"


const TodoCard = ({ todo, deleteTodo, openWindowToEdit, makeCompleted }) => {

  return (
    <div className="todoCard">
      <h4 onClick={() => openWindowToEdit(todo)}>{todo.title}</h4>
      <h4>{todo.id}</h4>
      <Button handleDo={() => deleteTodo(todo)}>Delete</Button>
      <input type='checkbox' checked={todo.completed} onChange={() => makeCompleted(todo.id)}/>
    </div>
  )
}

export default TodoCard