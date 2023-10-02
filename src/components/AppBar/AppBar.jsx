import css from "./AppBar.module.css";
import Button from "../Button/Button";
import StatusFilter from "../Status Filter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        {" "}
        <section>
          <h2>Tasks</h2>
          <StatusFilter></StatusFilter>{" "}
          <TaskCounter taskActive={0} taskCompleted={0}></TaskCounter>
        </section>
        <section>
          <h2>Filter by status</h2>
          <Button type={"button"}>All</Button>
          <Button type={"button"}>Active</Button>
          <Button type={"button"}>Completed</Button>
        </section>
      </header>
    </>
  );
};
export default AppBar;
