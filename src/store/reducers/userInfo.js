import { SET_USER_INFO, SET_LOADED_USER } from "../types";

const initialState = {
    user: {},
    isLoadedUser: false
};

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADED_USER:
            return {
                ...state,
                isLoadedUser: action.payload,
            };
        case SET_USER_INFO:
            return {
                ...state,
                user: action.payload,
                isLoadedUser: true
            };
        default:
            return state;
    }
};
export default userInfo;