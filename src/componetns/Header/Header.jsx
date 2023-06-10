import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import React from "react";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        alt="avatar"
        src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png"
      ></img>
      <div className={classes.login}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
