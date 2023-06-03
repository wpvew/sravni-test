import React from 'react';
import styles from './header.scss';
import common from '@styles/_common.scss';
import classNames from 'classnames';

interface IHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function Header({ title, children }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={classNames(common.container, styles.container)}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </header>
  );
}
