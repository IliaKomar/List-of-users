import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const UserPreview = ({ login, avatarUrl, htmlUrl }) => {
    const navigate = useNavigate();
    const handleBlockClick = () => {
        navigate(`/users/${login}`)
    }
    return (
        <div className={styles.wrapper} onClick={handleBlockClick}>
            <div className={styles.content}>
                <img
                    alt='user-avatar'
                    src={avatarUrl}
                    className={styles.avatar}
                />
                <div className={styles.textContent}>
                    <h3>{login}</h3>
                    <div>
                        Github:
                        <a
                            href={htmlUrl}
                            target='_blank'
                            rel='noreferrer'
                            className={styles.link}
                            onClick={e => e.stopPropagation()}
                        >
                            {htmlUrl}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

UserPreview.propTypes = {
    login: PropTypes.string,
    avatarUrl: PropTypes.string,
    htmlUrl: PropTypes.string
};

export default UserPreview;
