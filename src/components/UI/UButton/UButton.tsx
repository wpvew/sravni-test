import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './ubutton.scss';

interface IUButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'contained' | 'text';
  disabled?: boolean;
  sx?: CSSProperties;
  size?: 'xs' | 's' | 'm' | 'l';
  mobileSize?: 'mobileXs' | 'mobileS' | 'mobileM' | 'mobileL';
}

export function UButton(props: IUButtonProps) {
  const { children, onClick, variant = 'contained', disabled = false, size = 's', mobileSize = 'mobileXs', sx } = props;
  const classname = classNames(styles.button, styles[variant], styles[size], styles[mobileSize]);

  return (
    <button className={classname} disabled={disabled} onClick={onClick} style={sx}>
      {children}
    </button>
  );
}
