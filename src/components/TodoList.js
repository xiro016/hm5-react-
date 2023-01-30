import { useContext } from "react";
import { Context } from "../App";
import TodoCard from "./TodoCard";

const TodoList = ({ offset, limit, sortBy, todoList, makeCompleted, openWindowToEdit, deleteTodo }) => {

  const { search } = useContext(Context)
  const SearchFunc = () => todoList?.filter((item) => item.title.includes(search))

  const SortAndFilter = (arr) => {
    switch (sortBy) {
      case 'abs': {
        return arr?.sort((a, b) => a.id - b.id)
      }
      case 'desc': {
        return arr.sort((a, b) => b.id - a.id)
      }
      case 'letter': {
        return arr.sort((a, b) => a.title.localeCompare(b.title))
      }
      default: {
        return arr
      }
    }
  }

  return ( 
    <div className='listItems'>
      {SortAndFilter(SearchFunc())?.slice(offset, offset + limit)?.map((item, i) =>
          <TodoCard makeCompleted={makeCompleted} key={i} openWindowToEdit={openWindowToEdit} todo={item} deleteTodo={deleteTodo}/>
      )}
    </div>
  );
}
 
export default TodoList;