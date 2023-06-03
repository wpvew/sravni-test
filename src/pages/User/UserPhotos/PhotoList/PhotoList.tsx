import React from 'react';
import { TPhotoList } from '../../../../store/slice/photoListSlice';
import styles from './photolist.scss';

interface IPhotoItemProps {
  list: TPhotoList;
}

export function PhotoList({ list }: IPhotoItemProps) {
  return (
    <>
      {list.map((photo) => (
        <li key={photo.id} className={styles.item}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <span className={styles.itemId}>#{photo.id}</span>
        </li>
      ))}
    </>
  );
}
