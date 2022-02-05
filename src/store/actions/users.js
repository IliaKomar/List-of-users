
import { SET_USERS, SET_SINCE, SET_LOADED_USERS } from "../types";

export const setUsers = (items) => ({
    type: SET_USERS,
    payload: items,
});

export const setLoaded = (payload) => ({
    type: SET_LOADED_USERS,
    payload,
});

export const setSince = (since) => ({
    type: SET_SINCE,
    payload: since
});