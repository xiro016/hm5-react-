import Button from "./UI/Button"


const TodoCard = ({ todo, deleteTodo }) => {

  return (
    <div className="todoCard">
      <h2>{todo.title}</h2>
      <h2>{todo.id}</h2>
      <Button handleDo={() => deleteTodo(todo)}>Delete</Button>
    </div>
  )
}

export default TodoCard