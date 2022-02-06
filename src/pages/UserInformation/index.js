import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import UserInfoBlock from '../../components/UserInfo';
import { getUserInfo } from "../../store/actionCreators/getUserInfo";

import styles from './styles.module.scss';

const UserInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useParams();
  const { user, isLoadedUser } = useSelector(({ userInfo }) => userInfo);

  useEffect(() => {
    dispatch(getUserInfo(userName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      {isLoadedUser ? (
        <div>
          {
            <div className={styles.buttonBackWrap} onClick={handleClickGoBack}>
              <div> {'<--'} Go back</div>
            </div>
          }
          <UserInfoBlock user={user} />
        </div>
      ) : (
          <div className={styles.loading}>Loading...</div>
      )}
    </div>
  );
};

export default UserInformation;
