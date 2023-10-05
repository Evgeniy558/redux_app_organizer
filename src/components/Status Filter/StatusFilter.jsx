import { useSelector } from "react-redux";
import Button from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilter } from "../../redux/filters/constants";

const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);
  return (
    <>
      <div className={css.wrapper}>
        <Button selected={filter === statusFilter.all}>All</Button>
        <Button selected={filter === statusFilter.active}>Active</Button>
        <Button selected={filter === statusFilter.completed}>Completed</Button>
      </div>
    </>
  );
};
export default StatusFilter;
