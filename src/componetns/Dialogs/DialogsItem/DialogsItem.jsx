import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogItems = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div className={classes.isActive}>
        <NavLink to={path}>
          <div className={classes.dialog}>
            <img src={props.ava} alt="avatar" /> <h3>{props.name}</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default DialogItems;
