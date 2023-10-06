import css from "./Task.module.css";
const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>{" "}
      <button className={css.btn}>&#10060;</button>
    </div>
  );
};
export default Task;
