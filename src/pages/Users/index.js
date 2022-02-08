import React, { useEffect } from 'react';

import UserPreview from '../../components/UserPreview';
import LoadingUser from '../../components/LoadingUsers';
import PaginationButtons from '../../components/PaginationButtons';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/actionCreators/getUsers';

import styles from './styles.module.scss';

const Users = () => {
  const dispatch = useDispatch();
  const { isLoaded, users, since, pageSize } = useSelector(({ users }) => users);
  
  useEffect(() => {
      dispatch(getUsers(since, pageSize));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [since]);

  return (
    <div>
      {isLoaded ? (
        <div className={styles.content}>
          {
            users.map((user) => (
              <UserPreview
                key={user.id}
                login={user.login}
                avatarUrl={user.avatar_url}
                htmlUrl={user.html_url}
              />
            ))
          }
        </div>
      ) : (
        <div className={styles.loadingContent}>
          {
            Array(12)
              .fill(0)
              .map((_, index) => <LoadingUser key={index} />)
          }
        </div>
      )}
      <PaginationButtons />
    </div>
  );
};

export default Users;
