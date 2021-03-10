import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
// import snackbarReducer from './snackbar/snackbar.reducer';
import notesReducer from './notes/notes.reducer';

const rootReducer = combineReducers({
    user:userReducer,
    notes:notesReducer
    // snackbar:snackbarReducer
});

export default rootReducer;