
import './single-note.styles.css'
import ThreeDots from "../../images/3-dot-copy_2021-03-04/3-dot-copy.png";

const SingleNote = ({note}) => {
  return (
    <div className="profile-main-user__notesAndDetails-content__notes-allNotes__singlenote">
      <div className="singleNote-textAndDots">
        <div className="singleNote-noteAndDots__text">
          {note.text}
        </div>
        <img src={ThreeDots} alt="" />
      </div>
      <div className="date-and-time">{`${note.dateAndTime.getHours()}:${note.dateAndTime.getMinutes()}, ${note.dateAndTime.getDate()} ${note.dateAndTime.getMonth()}`}</div>
    </div>
  );
};


export default SingleNote;

