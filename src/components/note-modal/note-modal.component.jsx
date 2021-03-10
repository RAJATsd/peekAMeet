import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import { addNoteAction } from "../../redux/notes/notes.actions";
import "./note-modal.styles.css";

const NoteModal = ({ visibility, changeModalState, addANote }) => {
  const [noteInfo, setNoteInfo] = useState({
    text: null,
    dateAndTime: new Date(),
  });
  const addNote = () => {
    addANote(noteInfo);
  };
  return (
    <div className={`note-modal ${visibility ? "" : "hidden-modal"}`}>
      <div className="note-modal-main-content">
        <div className="close-button">
          <button onClick={() => changeModalState()}> X Close </button>
        </div>
        <div className="main-form">
          <textarea
            name="Text1"
            cols="40"
            rows="3"
            onChange={(event) =>
              setNoteInfo({ ...noteInfo, text: event.target.value })
            }
            placeholder="Text for the note"
            style={{ width: "100%", borderRadius: "4px" }}
          ></textarea>
          <DatePicker
            selected={noteInfo.dateAndTime}
            onChange={(date) => setNoteInfo({ ...noteInfo, dateAndTime: date })}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="addNoteButton">
          <button onClick={addNote}>Add Note</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addANote: (note) => dispatch(addNoteAction(note)),
});

export default connect(null, mapDispatchToProps)(NoteModal);
