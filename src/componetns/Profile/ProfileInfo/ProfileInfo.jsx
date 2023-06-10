import Loading from "../../loader/lodaing";
import user_photo from "../../../assets/images/user.png";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loading />;
  }
  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <img
          src="https://thumbs.dreamstime.com/b/vector-old-town-view-panorama-good-footer-header-56815551.jpg"
          alt="avatar"
        />
      </div>
      <div className={classes.ava}>
        <img
          alt="large avatar"
          src={
            props.profile.photos.large ? props.profile.photos.large : user_photo
          }
        ></img>
      </div>
      <div>
        <div className={classes.profile}>
          <div className={classes.name}>{props.profile.fullName}</div>
          <div className={classes.item}>
            <ProfileStatusWithHooks
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
          <div className={classes.item}>
            Ищу работу:
            {props.profile.lookingForAJob
              ? props.profile.lookingForAJobDescription
              : "не ищу"}
          </div>
          <div className={classes.item}></div>
          <div className={classes.item}>
            <a href={props.profile.contacts.facebook}>Facebok</a>{" "}
          </div>
          <div className={classes.item}>
            {" "}
            <a href={props.profile.contacts.website}>website</a>
          </div>
          <div className={classes.item}>
            <a href={props.profile.contacts.vk}>vk</a>
          </div>
          <div className={classes.item}>
            <a href={props.profile.contacts.twitter}>twitter</a>
          </div>
          <div className={classes.item}>
            <a href={props.profile.contacts.instagram}>instagram</a>
          </div>
          <div className={classes.item}>
            <a href={props.profile.contacts.youtube}>youtube</a>
          </div>
          <div className={classes.item}>
            <a href={props.profile.contacts.github}>github</a>
          </div>
          <div className={classes.item}>
            {" "}
            <a href={props.profile.contacts.mainLink}>mainLink</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
