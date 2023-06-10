import Dialogs from "./Dialogs";
import React from "react";
import { addMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { withAuthRedirect } from "../Header/HOC/withAuthRedirect";
import { useNavigate, useParams } from "react-router-dom";
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
class DialogsContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Dialogs {...this.props} />;
  }
}
let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => ({
  addMessage: (newMessageBody) => {
    dispatch(addMessage(newMessageBody));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthRedirectComponent));
