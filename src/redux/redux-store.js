import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reduser";
import musicReducer from "./music-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
