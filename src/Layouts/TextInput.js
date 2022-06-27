import classes from "./TextInput.module.css";
const TextInput = (props) => {
  return (
    <div>
      <input className={classes.input} type="text" {...props}></input>
    </div>
  );
};
export default TextInput;
