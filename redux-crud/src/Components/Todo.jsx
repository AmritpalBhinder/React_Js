
import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from "./Features/todoSlice.js";

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <p key={index}>
            {todo.title} - {todo.status ? "Completed" : "In Completed"}
            <button onClick={() => dispatch(remove(index))}>X</button>
            <button
              onClick={() =>
                dispatch(
                  update({
                    index: index,
                    title: "updated title",
                    status: true,
                  })
                )
              }
            >
              Edit
            </button>
          </p>
        );
      })}

      <button onClick={() => dispatch(add("New Task - 10am"))}>Add Todo</button>
    </div>
  );
}

