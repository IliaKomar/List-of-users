import React from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSince } from '../../store/actions/users';

const PaginationButtons = () => {
    const dispatch = useDispatch();
    const { since, users } = useSelector(({ users }) => users);

    const lastUserId = users[users.length - 1]?.id;

    const handleClickNext = () => {
        dispatch(setSince(lastUserId));
    };
    const handleClickFirstPage = () => {
        dispatch(setSince(0));
    }
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} disabled={since === 0} onClick={handleClickFirstPage}>
                First page
            </button>
            <button className={styles.button} onClick={handleClickNext}>
                Next
            </button>
        </div>
    );
};

export default PaginationButtons;
