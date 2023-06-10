import classes from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={props.id === 1 ? classes.message1 : classes.message2}>
      {props.text}
    </div>
  );
};

export default Message;
