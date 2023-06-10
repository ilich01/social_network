import profileReducer, { addPost, delitePost } from "./profile-reducer";

test("lenght of posts should be incremented", () => {
  // 1. test data
  let action = addPost("test-text");
  let state = {
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
  };
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectataion
  expect(newState.posts.length).toBe(11);
});
test("after deliting length should be decrement", () => {
  // 1. test data
  let action = delitePost(1);
  let state = {
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
  };
  // 2. action
  let newState = profileReducer(state, action);
  //3. expectataion
  expect(newState.posts.length).toBe(9);
});
