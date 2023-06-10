import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.posts}>
      <div className={classes.avatar}>
        {" "}
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
      </div>
      <div className={classes.item}> {props.message} </div>
      <div className={classes.like}>
        <span>Like</span>
        <div className={classes.like_qty}>{props.like_qty}</div>
      </div>
    </div>
  );
};
export default Post;
