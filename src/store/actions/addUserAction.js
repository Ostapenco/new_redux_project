export const CLICK_SIGN_UP_BUTTON = 'CLICK_SIGN_UP_BUTTON';

export const addNewUser = user => ({
  type: CLICK_SIGN_UP_BUTTON,
  payload: user
});
