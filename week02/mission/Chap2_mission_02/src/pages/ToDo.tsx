import {TaskForm} from "../components/TaskForm";
import {TaskList} from "../components/TaskList";
import { Toggle } from "../components/Toggle";

export const ToDo = () => {
  return (
    <div className="font-sans flex flex-col justify-center items-center w-screen h-screen bg-[#eef2f3] m-0">
      <Toggle />
      <div className="bg-white p-5 rounded-xl shadow-md w-[350px] text-center">
        <div className="text-3xl font-extrabold mb-4">NARU TODO</div>
        <TaskForm />
        <div className="flex justify-between">
          <TaskList title="할 일" isDone={false} />
          <TaskList title="완료" isDone={true} />
        </div>
      </div>
    </div>
  );
};
