let initialState = {
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
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
