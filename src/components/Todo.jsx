import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); // No need for fallback here

  if (!todos) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <>
    
      <h2> Todo List</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id} style={{ marginRight: "8px" }}>
          {todo.text}
          <button style={{ position:"relative", left:"10px"}} onClick={() => dispatch(removeTodo(todo.id))}>
            Remove
          
          </button>
          <br />
          <br />
        </li>
        ))
      ) : (
        <div>No todos</div>
      )}
    </>
  );
}
