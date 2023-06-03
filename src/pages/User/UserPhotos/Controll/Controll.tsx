import React from 'react';
import { UButton } from '../../../../components/UI/UButton';
import { useAppSelector } from '../../../../store/hooks';
import styles from './controll.scss';

interface IControllProps {
  page: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export function Controll({ page, onClickNext, onClickPrev }: IControllProps) {
  const { data: photoList, isLoading } = useAppSelector((state) => state.photoListSliceReducer);

  return (
    <div className={styles.pagination}>
      <UButton onClick={onClickPrev} disabled={page <= 1} variant='contained' size='m' mobileSize='mobileS'>
        Назад
      </UButton>

      <span className={styles.page}>{page}</span>

      <UButton
        onClick={onClickNext}
        disabled={isLoading || !photoList[page]?.length}
        variant='contained'
        size='m'
        mobileSize='mobileS'
      >
        Вперед
      </UButton>
    </div>
  );
}
