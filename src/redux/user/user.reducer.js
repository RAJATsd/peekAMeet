import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser : null,
    isFetching: false,
    errMsg:null,
    checkingLoggedIn : true
}

const userReducer = (state=INITIAL_STATE,action) => {
    switch(action.type)
    {
        case userActionTypes.LOGIN_USER_START:
            return{
                ...state,
                isFetching:true
            }
        case userActionTypes.LOGIN_USER_SUCCESS : 
            return {
                ...state,
                currentUser:action.payload,
                errMsg:null,
                checkingLoggedIn:false
            }
        case userActionTypes.LOGIN_USER_FAILED : 
            return {
                ...state,
                errMsg : action.payload,
                checkingLoggedIn:false
            }
        default: 
            return state;
    }
}

export default userReducer;