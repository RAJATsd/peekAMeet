import {createSelector} from 'reselect';

const notesSelectors = state => state.notes;

export const allNotesSelectors = createSelector(
    [notesSelectors],
    (notes) => notes.notes
);