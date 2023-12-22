import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [todo, setTodo] = useState(["Hello all ! This is first message."]);

  const addToDo = (event) => {
    event.preventDefault();
    const newTodo = [...todo];
    newTodo.push(inputMessage);
    setTodo(newTodo);
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo(newTodo);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => setInputMessage(event.target.value)}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addToDo}>
          Submit
        </button>
      </div>
      <div class="board">
        <ul>
          {todo.map((item, index) => {
            return (
              <div className="message" key={index}>
                <h1>{item}</h1>
                <button className="delete-button" onClick={() => deleteTodo(index)}>
                  x
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
