import {notesActionTypes} from './notes.types';

export const addNoteAction = (note) => ({
    type:notesActionTypes.ADD_SINGLE_NOTE,
    payload:note
});