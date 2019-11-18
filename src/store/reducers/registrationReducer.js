import {
  REGISTRATION_CHANGE_NAME_TEXT,
  REGISTRATION_CHANGE_EMAIL_TEXT,
  REGISTRATION_CHANGE_PASSWORD_TEXT,
  REGISTRATION_CHANGE_CONFIRM_PASSWORD_TEXT
} from '../actions/registrationAction';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_CHANGE_NAME_TEXT:
      return {
        ...state,
        name: action.payload
      };
    case REGISTRATION_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: action.payload
      };
    case REGISTRATION_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
    case REGISTRATION_CHANGE_CONFIRM_PASSWORD_TEXT:
      return {
        ...state,
        confirmPassword: action.payload
      };
    default:
      return state;
  }
};
