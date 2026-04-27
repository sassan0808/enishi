import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './LineButton.module.css';

interface LineButtonProps {
  label?: string;
}

export default function LineButton({label = 'LINE で相談する'}: LineButtonProps): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const lineUrl = siteConfig.customFields?.lineUrl as string;

  return (
    <div className={styles.wrapper}>
      <a href={lineUrl} className={styles.button} target="_blank" rel="noopener noreferrer">
        <span className={styles.icon}>📩</span>
        {label}
      </a>
    </div>
  );
}
