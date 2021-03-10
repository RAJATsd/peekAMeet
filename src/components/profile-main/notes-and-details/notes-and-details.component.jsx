import { useState } from "react";
import { connect } from "react-redux";

import "./notes-and-details.styles.css";
import PenImage from "../../../images/shape_2021-03-04/shape.png";
import NoteModalComponent from "../../note-modal/note-modal.component";
import SingleNoteComponent from "../../single-note/single-note.component";
import { allNotesSelectors } from "../../../redux/notes/notes.selectors";

const NotesAndDetails = ({ notes }) => {
  const [toggle, setToggle] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const changeModalState = () => setOpenModal(!openModal);
  return (
    <div className="profile-main-user__notesAndDetails">
      <div className="profile-main-user__notesAndDetails-switchbar">
        <button
          className={`profile-main-user__notesAndDetails-switchbar__button ${
            toggle === 1 ? "active-button" : ""
          }`}
          onClick={() => setToggle(1)}
        >
          Details
        </button>
        <button
          className={`profile-main-user__notesAndDetails-switchbar__button ${
            toggle === 2 ? "active-button" : ""
          }`}
          onClick={() => setToggle(2)}
        >
          Notes
        </button>
      </div>
      <div className="profile-main-user__notesAndDetails-content">
        <div
          className={`profile-main-user__notesAndDetails-content__details ${
            toggle === 1 ? "active-tab" : ""
          }`}
        >
          ashdiasd
        </div>
        <div
          className={`profile-main-user__notesAndDetails-content__notes ${
            toggle === 2 ? "active-tab" : ""
          }`}
        >
          <div
            className="profile-main-user__notesAndDetails-content__notes-addNote"
            onClick={() => changeModalState()}
          >
            <img src={PenImage} alt="" style={{ margin: "4px" }} />
            <h5 style={{ margin: 0 }}>Add Notes</h5>
          </div>
          <NoteModalComponent
            visibility={openModal}
            changeModalState={changeModalState}
          />
          <div className="profile-main-user__notesAndDetails-content__notes-allNotes">
            {notes.map((singleNote) => (
              <SingleNoteComponent key={singleNote.id} note={singleNote} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: allNotesSelectors(state),
});

export default connect(mapStateToProps)(NotesAndDetails);
