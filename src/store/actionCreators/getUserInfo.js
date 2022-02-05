import { getApi } from "../../utils/getApi";
import { setLoaded, setUserInfo } from "../actions/userInfo";

export const getUserInfo = (userName) => (dispatch) => {
    dispatch(setLoaded(false))
    getApi(`users/${userName}`)
        .then(({ data }) => {
            dispatch(setUserInfo(data))
        })
        .catch(error => console.error(error));
};