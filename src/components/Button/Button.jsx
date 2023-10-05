import css from "./Button.module.css";
const Button = ({ children, type, selected = false }) => {
  return (
    <>
      <button className={css.btn} type={type} selected={selected}>
        {children}
      </button>
    </>
  );
};
export default Button;
