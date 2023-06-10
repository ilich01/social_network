import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunk,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../Header/HOC/withAuthRedirect";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = this.props.authUserId;
    this.props.getProfileThunk(userId);

    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  getStatus,
  updateStatus,
  getProfileThunk,
})(withRouter(AuthRedirectComponent));
