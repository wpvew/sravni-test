import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchPhotoList } from '../../../store/slice/photoListSlice';
import { useParams } from 'react-router-dom';
import { PhotoList } from './PhotoList';
import { Control } from './Control';
import styles from './userphotos.scss';

export function UserPhotos() {
  const { data: photoList, error, isLoading } = useAppSelector((state) => state.photoListSliceReducer);
  const { userId } = useParams() as { userId: string };
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhotoList({ userId }));
  }, []);

  return (
    <div className={styles.photos}>
      <div className={styles.wrapper}>
        {!error && !isLoading && photoList[page - 1] && (
          <ul className={styles.list}>
            <PhotoList list={photoList[page - 1]} />
          </ul>
        )}
        {error && !isLoading && <span>{error}</span>}
        {isLoading && <span>Loading...</span>}
      </div>
      <Control
        page={page}
        onClickPrev={() => setPage((prev) => --prev)}
        onClickNext={() => setPage((prev) => ++prev)}
      />
    </div>
  );
}
