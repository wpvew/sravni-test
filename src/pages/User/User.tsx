import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearPhotoList } from '../../store/slice/photoListSlice';
import { Layout } from '../../components/Layout';
import { UserPhotos } from './UserPhotos';
import { fetchUser } from '../../store/slice/userSlice';
import { Header } from '../../components/Header';
import { UButton } from '../../components/UI/UButton';

export function User() {
  const { data: userData, error } = useAppSelector((state) => state.userSliceReducer);
  const { userId } = useParams() as { userId: string };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, []);

  const handleClickBack = () => {
    dispatch(clearPhotoList());
    navigate('/');
  };

  return (
    <>
      <Header title={!error ? userData.name : error}>
        <UButton onClick={handleClickBack} variant='text' sx={{ marginLeft: 'auto' }} size='l' mobileSize='mobileM'>
          Назад
        </UButton>
      </Header>
      <Layout>
        <UserPhotos />
      </Layout>
    </>
  );
}
