import React from "react";
import classes from "./Users.module.css";
import user_photo from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);
  return (
    <div>
      <div>
        {slicedPages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? classes.selectedPage : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={classes.card} key={u.id}>
          <span className={classes.infromation}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    alt="small avatar"
                    src={u.photos.small != null ? u.photos.small : user_photo}
                  ></img>
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgres.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollowThunk(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgres.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.followThunk(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </span>

            <span>
              <div className={classes.fullName}>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
          <div className={classes.location}>
            <div>{"u.location.city"}</div>
            <div>{"u.location.country"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
