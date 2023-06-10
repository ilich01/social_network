const ADD = "ADD";
const REMOVE = "REMOVE";
let initialState = {
  songs: [
    {
      id: 1,
      songName: "Off The Grid",
      artist: "Kanye West",
      alboumImg:
        "https://avatars.yandex.net/get-music-content/5559490/dad14196.a.18398731-1/m1000x1000",
      status: true,
    },
    {
      id: 2,
      songName: "XXX.",
      artist: "Kendrick Lamar",
      alboumImg:
        "https://avatars.yandex.net/get-music-content/114728/e66d2721.a.4883172-3/m1000x1000",
      status: false,
    },
    {
      id: 3,
      songName: "Rude Mantras",
      artist: "Andy Panda",
      alboumImg:
        "https://avatars.yandex.net/get-music-content/1880735/794f0932.a.9071751-1/400x400",
      status: true,
    },
    {
      id: 4,
      songName: "Freedom",
      artist: "TumaniYO",
      alboumImg:
        "https://avatars.yandex.net/get-music-content/6296749/18628476.a.5729589-2/m1000x1000",
      status: false,
    },
    {
      id: 5,
      songName: "Silhouette",
      artist: "Miyagi & Эндшпиль",
      alboumImg:
        "https://avatars.yandex.net/get-music-content/7548376/56284cfe.a.23877465-1/m1000x1000",
      status: false,
    },
  ],
};
const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        songs: state.songs.map((s) => {
          if (s.id === action.songId) {
            return { ...s, status: true };
          }
          return s;
        }),
      };

    case REMOVE:
      return {
        ...state,
        songs: state.songs.map((s) => {
          if (s.id === action.songId) {
            return { ...s, status: false };
          }
          return s;
        }),
      };
    default:
      return state;
  }
};
export const add = (songId) => {
  return {
    type: ADD,
    songId,
  };
};
export const remove = (songId) => {
  return {
    type: REMOVE,
    songId,
  };
};

export default musicReducer;
