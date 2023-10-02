import css from "./TaskForm.module.css";
import Button from "../Button/Button";

const TaskForm = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target.elements.text.value);
    ev.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          placeholder="Enter task text..."
          name="text"
          type="text"
          className={css.field}
        ></input>
        <Button type={"submit"}>Add task</Button>
      </form>
    </>
  );
};
export default TaskForm;
