import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            //"..." is es2015 syntax, takes an array and adds in new value(s) with a brand new array
            //essentially joins the contents of two arrays in a brandnew array
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};