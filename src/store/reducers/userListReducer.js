import { CLICK_SIGN_UP_BUTTON } from '../actions/addUserAction';

const initialState = {
  arr: []
};

export const userListReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case CLICK_SIGN_UP_BUTTON:
      return {
        ...state,
        arr: [...state.arr, action.payload]
      };
    default:
      return state;
  }
};
