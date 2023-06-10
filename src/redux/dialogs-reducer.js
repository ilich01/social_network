let initialState = {
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
};
const dialogReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case "ADD-MESSAGE":
      let body = action.newMessageBody;

      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 1, text: body, newMessageText: "" },
        ],
      };

    case "UPDATE-NEW-MESSAGE-TEXT":
      stateCopy = {
        ...state,
        newMessageText: action.newText,
      };
      return stateCopy;
    default:
      return state;
  }
};
export const addMessage = (newMessageBody) => {
  return {
    type: "ADD-MESSAGE",
    newMessageBody,
  };
};
export const updateNewMessageText = (text) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: text,
  };
};

export default dialogReducer;
