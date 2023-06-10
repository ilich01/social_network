import { setProfileTC } from "./auth-reducer";

const INITIALIZED_SUCCESS = "initialized/INITIALIZED_SUCCESS";

let initialState = {
  inictialaized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        inictialaized: true,
      };

    default:
      return state;
  }
};

export const inictialaizedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const inictialaizeApp = () => {
  return (dispatch) => {
    let promise = dispatch(setProfileTC());

    Promise.all([promise]).then(() => {
      dispatch(inictialaizedSuccess());
    });
  };
};

export default appReducer;
