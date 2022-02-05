import { combineReducers } from 'redux';
import users from './users';
import userInfo from './userInfo';

const rootReducer = combineReducers({
    users,
    userInfo
});

export default rootReducer;