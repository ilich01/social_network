import classes from "./Music.module.css";
import React from "react";
const Music = (props) => {
  return (
    <div>
      {props.songs.map((s) => (
        <ul className={classes.cards} key={s.id}>
          <li className={classes.card_item}>
            <button className={classes.btn_play}>&#9654;</button>
            <img
              alt="music lable"
              src={s.alboumImg}
              className={classes.album}
            />
            <div>
              <div className={classes.song_name}>{s.songName}.</div>
              <div className={classes.artist}>{s.artist}</div>
              <div className={classes.timeline}></div>
            </div>
            <div>
              {s.status ? (
                <button onClick={() => props.remove(s.id)}>Remove</button>
              ) : (
                <button
                  onClick={() => {
                    props.add(s.id);
                  }}
                >
                  Add
                </button>
              )}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Music;
