import { SET_USERS, SET_SINCE, SET_LOADED_USERS } from "../types";

const initialState = {
    users: [],
    isLoaded: false,
    since: 0,
    pageSize: 12,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoaded: true,
            };
        case SET_LOADED_USERS:
            return {
                ...state,
                isLoaded: action.payload,
            };
        case SET_SINCE: 
            return {
                ...state,
                since: action.payload
            };
        default:
            return state;
    }
};
export default users;