import React from "react";
import Users from "./Users";
import Loading from "../loader/lodaing";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Loading /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          followingInProgres={this.props.followingInProgres}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
        />
      </>
    );
  }
}

export default UsersAPIComponent;
