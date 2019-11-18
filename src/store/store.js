import { createStore } from 'redux';
import { registrationReducer } from './reducers/registrationReducer';
//import { userCountReducer } from './reducers/userCountReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  registration: registrationReducer
  //userCount: userCountReducer
});

const store = createStore(rootReducer);

export default store;
