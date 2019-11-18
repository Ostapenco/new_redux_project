import { createStore } from 'redux';
import { userListReducer } from './reducers/userListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userList: userListReducer
});

const store = createStore(rootReducer);

export default store;
