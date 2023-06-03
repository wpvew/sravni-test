import React from 'react';
import { CardList } from './CardList';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import styles from './home.scss';

export function Home() {
  return (
    <>
      <Header title='Список пользователей' />
      <Layout>
        <div className={styles.viewWindow}>
          <CardList />
        </div>
      </Layout>
    </>
  );
}
