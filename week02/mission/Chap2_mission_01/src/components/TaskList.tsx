import type {TTask} from "../types/task";
import "../App.css";

type TaskListProps = {
  list: TTask[];
  title: string;
  isDone: boolean;
  createTaskElement: (task: TTask, isDone: boolean) => React.ReactNode;
};

export const TaskList = ({list, title, isDone, createTaskElement}: TaskListProps) => {
  return (
    <div>
      <div className="render-container__section">
        <h2 className="render-container__title">{title}</h2>
        <ul id="todo-list" className="render-container__list">
          {list.map((task) => createTaskElement(task, isDone))}
        </ul>
      </div>
    </div>
  );
};
