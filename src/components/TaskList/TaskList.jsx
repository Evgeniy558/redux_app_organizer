import { useSelector } from "react-redux";
import Task from "../Task/Task";

const getVisibleTasks = (tasks, statusFilter) => {
  console.log("statusFilter", statusFilter);
  const taskList =
    statusFilter === "active"
      ? tasks.filter((task) => !task.completed)
      : statusFilter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks;
  return taskList;
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <>
      {visibleTasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task}></Task>
          </li>
        );
      })}
    </>
  );
};
export default TaskList;
