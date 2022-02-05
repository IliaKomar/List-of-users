import { SET_USER_INFO, SET_LOADED_USER } from "../types";

export const setUserInfo = (items) => ({
    type: SET_USER_INFO,
    payload: items,
});

export const setLoaded = (payload) => ({
    type: SET_LOADED_USER,
    payload,
});
