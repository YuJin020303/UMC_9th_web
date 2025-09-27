import "../App.css";

type TaskFormProps = {
  todoInput: string;
  handleInput: (input: string) => void;
  addTodo: (text: string) => void;
};

export const TaskForm = ({todoInput, handleInput, addTodo}: TaskFormProps) => {
  return (
    <form id="todo-form" className="todo-container__form">
      <input
        type="text"
        id="todo-input"
        className="todo-container__input"
        placeholder="할 일 입력"
        required
        value={todoInput}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button
        type="submit"
        className="todo-container__button"
        onClick={(e) => {
          e.preventDefault();
          if (todoInput) {
            addTodo(todoInput);
          }
        }}
      >
        할 일 추가
      </button>
    </form>
  );
};
