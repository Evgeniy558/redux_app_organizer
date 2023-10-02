import css from "./AppBar.module.css";
import Button from "../Button/Button";
import StatusFilter from "../Status Filter/StatusFilter";
const AppBar = () => {
  return (
    <>
      <header className={css.header}>
        {" "}
        <section>
          <h2>Tasks</h2>
          <StatusFilter></StatusFilter>
        </section>
        <section>
          <h2>Filter by status</h2>
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Completed</Button>
        </section>
      </header>
    </>
  );
};
export default AppBar;
