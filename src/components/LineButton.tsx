import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './LineButton.module.css';

type Audience = 'personal' | 'biz';

interface LineButtonProps {
  audience?: Audience;
  label?: string;
}

const DEFAULTS: Record<Audience, string> = {
  personal: '📩 個人の方はこちら（LINE）',
  biz: '📩 経営者・法人の方はこちら（LINE）',
};

export default function LineButton({audience = 'personal', label}: LineButtonProps): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const url =
    audience === 'biz'
      ? (siteConfig.customFields?.lineBiz as string)
      : (siteConfig.customFields?.linePersonal as string);

  return (
    <div className={styles.wrapper}>
      <a
        href={url}
        className={`${styles.button} ${audience === 'biz' ? styles.buttonBiz : ''}`}
        target="_blank"
        rel="noopener noreferrer">
        {label ?? DEFAULTS[audience]}
      </a>
    </div>
  );
}
