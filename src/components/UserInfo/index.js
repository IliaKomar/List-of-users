import React from "react";

import classnames from "classnames";

import styles from "./styles.module.scss";

const UNKNOWN_FIElD = "Unknown field";

const UserInfoBlock = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <img
        alt="user-avatar"
        src={user.avatar_url}
        className={styles.avatar}
      />
      <div className={styles.contentWrap}>
        <div className={styles.headerWrap}>
          <div>
            Username: <div className={styles.boldText}>{user.login}</div>
          </div>
          <div>
            Followers:
            <div className={styles.boldText}>{user.followers}</div>
          </div>
          <div>
            Following:
            <div className={styles.boldText}>{user.following}</div>
          </div>
        </div>
        <div>Created_at: {user.created_at.split('T')[0]}</div>
        <div
          className={classnames({
            [styles.unavailableData]: !user.company,
          })}
        >
          Company: {user.company || UNKNOWN_FIElD}
        </div>
        <div
          className={classnames({
            [styles.unavailableData]: !user.email,
          })}
        >
          Email: {user.email || UNKNOWN_FIElD}
        </div>
        <div
          className={classnames({
            [styles.unavailableData]: !user.blog,
          })}
        >
          Blog:
          <a href={user.blog} className={styles.link}>
            {user.blog || UNKNOWN_FIElD}
          </a>
        </div>
        <div
          className={classnames({
            [styles.unavailableData]: !user.location,
          })}
        >
          Location: {user.location || UNKNOWN_FIElD}
        </div>
        <div
          className={classnames({
            [styles.unavailableData]: !user.bio,
          })}
        >
          Bio: {user.bio || UNKNOWN_FIElD}
        </div>
      </div>
    </div>
  );
};

export default UserInfoBlock;
