import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default function AddTodoComp() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleAddTodo}>
        {/* Attach the handleAddTodo function to the form's onSubmit event */}
        <input
          type="text"
          required
          value={input} // Bind input value to the state
          onChange={(e) => setInput(e.target.value)} // Update input state onChange
          placeholder="Enter todo"
        />
        <br />
        <br />
        <button type="submit">Add Todo</button>{" "}
        {/* Submit button to add todo */}
      </form>
    </>
  );
}
