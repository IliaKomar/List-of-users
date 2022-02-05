import { getApi } from '../../utils/getApi';
import { setUsers, setLoaded } from '../actions/users';

export const getUsers = (since, pageSize) => (dispatch) => {
    dispatch(setLoaded(false))
    getApi('users', { params: { since, per_page: pageSize } })
        .then(({ data }) => {
            dispatch(setUsers(data))
        })
        .catch(error => console.error(error));
};