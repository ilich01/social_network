import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
  _state: {
    sidebarPage: {
      friends: [
        {
          name: "Alina",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpJVN-mRhExggao_1vtYmU702ioAtmfy9dwoT_II&s",
        },
        {
          name: "Ilia",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkaRUmID3DpbzqBjQJxKVrPg7Od7IgGizzh04FXyuYA&s",
        },
        {
          name: "Alex",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpJVN-mRhExggao_1vtYmU702ioAtmfy9dwoT_II&s",
        },
      ],
    },
    profilePage: {
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
      newPostText: "",
    },
    messagesPage: {
      dialogsData: [
        {
          id: 1,
          name: "Serhii",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkaRUmID3DpbzqBjQJxKVrPg7Od7IgGizzh04FXyuYA&s",
        },
        {
          id: 2,
          name: "Andrei",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkaRUmID3DpbzqBjQJxKVrPg7Od7IgGizzh04FXyuYA&s",
        },
        {
          id: 3,
          name: "Ilia",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkaRUmID3DpbzqBjQJxKVrPg7Od7IgGizzh04FXyuYA&s",
        },
        {
          id: 4,
          name: "Victoria",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpJVN-mRhExggao_1vtYmU702ioAtmfy9dwoT_II&s",
        },
        {
          id: 5,
          name: "Aliana",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpJVN-mRhExggao_1vtYmU702ioAtmfy9dwoT_II&s",
        },
        {
          id: 5,
          name: "Aliana",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpJVN-mRhExggao_1vtYmU702ioAtmfy9dwoT_II&s",
        },
        {
          id: 5,
          name: "Aliana",
          ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpJVN-mRhExggao_1vtYmU702ioAtmfy9dwoT_II&s",
        },
      ],
      messagesData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "How are u?" },
        { id: 1, text: "Awesom!" },
        { id: 2, text: "No way!" },
      ],
      newMessageText: "",
    },
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  rerenderEntireTree() {
    console.log("state changed");
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this.rerenderEntireTree(this._state);

    this.rerenderEntireTree(this._state);
  },
};

export const subscribe = (observer) => {
  this.rerenderEntireTree = observer;
};
export default store;
