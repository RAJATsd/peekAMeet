import { notesActionTypes } from "./notes.types";

const INITIAL_STATE = {
  notes: [],
  indexes: 0,
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notesActionTypes.ADD_SINGLE_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: state.indexes }],
        indexes: state.indexes + 1,
      };
    default:
      return state;
  }
};

export default notesReducer;
