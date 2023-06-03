import React from 'react';
import { TCompanyData } from '../../../../store/slice/userSlice';
import styles from './company.scss';

interface ICompanyProps {
  company: TCompanyData;
}

export function Company({ company }: ICompanyProps) {
  return (
    <div className={styles.company}>
      <div className={styles.group}>
        <span>
          <strong>Company name: </strong>
        </span>
        <span>{company.name}</span>
      </div>
      <div className={styles.group}>
        <span>
          <strong>Business service: </strong>
        </span>
        <span>{company.bs}</span>
      </div>
      <div className={styles.group}>
        <span>
          <strong>Catch Phase: </strong>
        </span>
        <span>{company.catchPhrase}</span>
      </div>
    </div>
  );
}
