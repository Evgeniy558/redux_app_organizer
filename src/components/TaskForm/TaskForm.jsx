import Button from "../Button/Button";

const TaskForm = () => {
  return (
    <>
      <form>
        <input placeholder="Enter task text..."></input>
        <Button type={"submit"}>Add task</Button>
      </form>
    </>
  );
};
export default TaskForm;
