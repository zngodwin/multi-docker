import {SIGN_IN, SIGN_OUT } from './types';
import history from '../history';

//named exports, export specific functions opposed to export default

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};