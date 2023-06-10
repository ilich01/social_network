import { connect } from "react-redux";
import { add, remove } from "../../redux/music-reducer";
import Music from "./Music";
let mapStateToProps = (state) => {
  return {
    songs: state.musicPage.songs,
  };
};

const MusicContainer = connect(mapStateToProps, {
  add,
  remove,
})(Music);
export default MusicContainer;
