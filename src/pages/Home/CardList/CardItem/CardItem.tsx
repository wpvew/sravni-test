import React from 'react';
import { Link } from 'react-router-dom';
import { TUserData } from '../../../../store/slice/userSlice';
import styles from './carditem.scss';

interface ICardItemProps {
  userData: TUserData;
}

export function CardItem({ userData }: ICardItemProps) {
  return (
    <Link to={`/user/${userData.id}`} className={styles.card}>
      <div className={styles.container}>
        <h3 className={styles.title}>{userData.name}</h3>
        <div className={styles.wrapper}>
          <div className={styles.desc}>
            <span className={styles.descTitle}>Username: </span>
            <span>{userData.username}</span>
          </div>
          <div className={styles.desc}>
            <span className={styles.descTitle}>Phone: </span>
            <span>{userData.phone}</span>
          </div>
          <div className={styles.desc}>
            <span className={styles.descTitle}>Email: </span>
            <span>{userData.email}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
