import css from "./TaskCounter.module.css";
const TaskCounter = ({ taskActive, taskCompleted }) => {
  return (
    <>
      <p className={css.text}>Activ:{taskActive}</p>
      <p className={css.text}>Completed:{taskCompleted}</p>
    </>
  );
};
export default TaskCounter;
