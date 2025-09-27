import { useTask } from "../hooks/useTask";

export const TaskForm = () => {
  const { todoInput, todoList, setTodoInput, setTodoList } = useTask();

  const handleInput = (input: string): void => {
    const inputText = input.trim();
    setTodoInput(inputText);
  };

  // 할 일 추가 함수
  const addTodo = (text: string): void => {
    const todo = { id: Date.now(), text };
    setTodoList([...todoList, todo]);
    setTodoInput("");
  };

  return (
    <form id="todo-form" className="flex gap-2 mb-5">
      <input
        type="text"
        id="todo-input"
        className="flex-1 p-2 border border-gray-300 rounded-md text-md"
        placeholder="할 일 입력"
        required
        value={todoInput}
        onChange={(e) => handleInput(e.target.value)}
      />
      <div
        className="bg-green-200 text-white border-none px-3 py-2 rounded-md text-md font-bold transition-colors duration-300 hover:bg-green-600 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          if (todoInput) {
            addTodo(todoInput);
          }
        }}
      >
        할 일 추가
      </div>
    </form>
  );
};
