import "./App.css";

import Navbar from "./componetns/Navbar/Navbar.jsx";
import { inictialaizeApp } from "./redux/app-reducer";
import News from "./componetns/News/News";

import Settings from "./componetns/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer, {
  withRouter,
} from "./componetns/Dialogs/DialogsContainer";
import UsersContainer from "./componetns/Users/UsersContainer";
import MusicContainer from "./componetns/Music/MusicContainer";
import ProfileContainer from "./componetns/Profile/ProfileContainer";
import HeaderContainer from "./componetns/Header/HedaerContainer";
import Login from "./componetns/Login/Login";
import { Component } from "react";
import { Provider, connect } from "react-redux";
import Loading from "./componetns/loader/lodaing";
import { compose } from "redux";
import store from "./redux/redux-store";
class App extends Component {
  componentDidMount() {
    this.props.inictialaizeApp();
  }
  render() {
    if (!this.props.inictialaized) {
      return <Loading />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId?" element={<ProfileContainer />} />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<MusicContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  inictialaized: state.app.inictialaized,
});
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    inictialaizeApp,
  })
)(App);
let SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJSApp;
