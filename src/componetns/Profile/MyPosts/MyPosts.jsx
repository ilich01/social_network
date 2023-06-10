import React from "react";
import { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validator/validators";
import { Textarea } from "../../FormsContorls/FormsConstorls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const maxLength30 = maxLengthCreator(30);

class MyPosts extends PureComponent {
  render() {
    let postsElements = this.props.posts.map((p) => (
      <Post message={p.message} like_qty={p.LikesCount} />
    ));
    let addNewPost = (value) => {
      this.props.addPost(value.newPostBody);
    };

    return (
      <div className={classes.content}>
        <div className={classes.new_post}>
          <div className={classes.item}>My posts</div>
          <AddPostFormRedux onSubmit={addNewPost} />
          <div className={classes.posts}>{postsElements}</div>
        </div>
      </div>
    );
  }
}
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={classes.textarea}
        cols="30"
        rows="10"
        placeholder="Your post..."
        component={Textarea}
        name="newPostBody"
        validate={[required, maxLength30]}
      />
      <button className={classes.btn}>Post</button>
    </form>
  );
};
const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddPostForm);
export default MyPosts;
