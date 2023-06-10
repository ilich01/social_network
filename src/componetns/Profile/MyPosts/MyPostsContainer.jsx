import { addPost } from "../../../redux/profile-reducer";
import MyPostsform from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => ({
  addPost: (newPostBody) => {
    dispatch(addPost(newPostBody));
  },
});
const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPostsform);
export default MyPostContainer;
