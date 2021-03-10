import "./profile-main.styles.css";
import MyImage from "../../images/rajat/rajat.jpeg";
import GroupCopyImage from "../../images/group-copy_2021-03-03/group-copy.png";
import NotesAndDetailsComponent from "./notes-and-details/notes-and-details.component";

const ProfileMain = () => {
  return (
    <div className="profile-main">
      <div className="profile-main__wall">
        <img className="groupCopyImage" src={GroupCopyImage} alt="" />
      </div>
      <div className="profile-main-user">
        <img className="myImage" src={MyImage} alt="" />
        <div className="profile-main-user__info">
          <h3 className="profile-main-user__info__ele">Rajat Sharma</h3>
          <h5 className="profile-main-user__info__ele">CEO</h5>
          <h5 className="profile-main-user__info__ele">No Company</h5>
          <div className="profile-main-user__info__ele">bla bla</div>
          <div className="profile-main-user__info__ele">
            <button className="profile-main-user__info__button button-first">
              message
            </button>
            <button className="profile-main-user__info__button">
              save contact
            </button>
          </div>
        </div>
        <NotesAndDetailsComponent />
      </div>
    </div>
  );
};

export default ProfileMain;
