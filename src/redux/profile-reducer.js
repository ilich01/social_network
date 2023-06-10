import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";
const ADD_POST = "profile/ADD-POST";
const DELITE_POST = "profile/DELITE-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", LikesCount: 234 },
    { id: 2, message: "Where is everybody?", LikesCount: 4 },
    { id: 3, message: "abracadabra", LikesCount: 5 },
    { id: 4, message: "no way!", LikesCount: 12 },
    { id: 5, message: "imma going to shopping", LikesCount: 44 },
    { id: 6, message: "tacos is the best", LikesCount: 4544 },
    { id: 7, message: "thig 4 life", LikesCount: 443 },
    { id: 8, message: "4ever in my heart", LikesCount: 12 },
    { id: 9, message: "love u", LikesCount: 443 },
    { id: 10, message: "It's my first post", LikesCount: 4 },
  ],
  profile: null,
  newPostText: "",
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          {
            id: 5,
            message: action.newPostText,
            LikesCount: 0,
          },
          ...state.posts,
        ],
      };
    }
    case DELITE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
export const delitePost = (postId) => {
  return {
    type: DELITE_POST,
    postId,
  };
};
export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUsersProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};
export const getProfileThunk = (userId) => {
  return async (dispatch) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(data));
  };
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
  };
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
