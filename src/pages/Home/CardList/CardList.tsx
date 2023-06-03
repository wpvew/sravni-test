import React, { useEffect } from 'react';
import { CardItem } from './CardItem';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchUserList } from '../../../store/slice/userListSlice';
import { Company } from './Company';
import styles from './cardlist.scss';

export function CardList() {
  const dispatch = useAppDispatch();
  const { data: userList, error, isLoading } = useAppSelector((state) => state.userListSliceReducer);

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  return (
    <>
      {!error && !isLoading && (
        <ul className={styles.list}>
          {userList.map((user) => (
            <li className={styles.item} key={user.id}>
              <CardItem userData={user} />
              <Company company={user.company} />
            </li>
          ))}
        </ul>
      )}
      {error && !isLoading && <span>{error}</span>}
      {isLoading && <span>Loading...</span>}
    </>
  );
}
