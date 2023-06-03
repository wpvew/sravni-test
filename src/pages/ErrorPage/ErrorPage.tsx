import React from 'react';
import { Layout } from '../../components/Layout';
import styles from './errorpage.scss';

export function ErrorPage() {
  return (
    <Layout>
      <div className={styles.desc}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Page not found</p>
      </div>
    </Layout>
  );
}
