import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsersTotalCount,
  setUsers,
  unfollow,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followThunk,
  unfollowThunk,
} from "../../redux/users-reduser";
import {
  getCurrentPage,
  getFollowingInProgres,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selector";
import UsersAPIComponent from "./UsersAPIComponent";
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgres: getFollowingInProgres(state),
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followThunk,
  unfollowThunk,
})(UsersAPIComponent);
export default UsersContainer;
