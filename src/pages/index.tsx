import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const PILLARS = [
  {
    title: 'Being を起点に',
    emoji: '🌱',
    description:
      '「何をするか」より「どう在るか」が先。量子力学・哲学・占いを通じて、自分の Being を探求します。',
    link: '/docs/コンセプト/Beingとは',
  },
  {
    title: 'Inside-Out へのシフト',
    emoji: '🔄',
    description:
      '外から内ではなく、内から外へ。パラダイムシフトは努力ではなく「気づき」から起きます。',
    link: '/docs/コンセプト/パラダイムシフトの地図',
  },
  {
    title: 'AI × 自己探求',
    emoji: '🤖',
    description:
      'AI を「答えを出すツール」ではなく「問いを深める鏡」として使う。セルフコーチングが日常になります。',
    link: '/docs/コンセプト/AI×自己探求',
  },
];

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  const lineUrl = siteConfig.customFields?.lineUrl as string;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={styles.heroEyebrow}>Inside-Out パラダイムシフト支援</p>
        <Heading as="h1" className="hero__title">
          縁 <span className={styles.heroSub}>enishi</span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/コンセプト/Inside-Outとは">
            コンセプトを読む
          </Link>
          <a
            className={clsx('button button--lg', styles.lineBtn)}
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer">
            📩 LINE で相談する
          </a>
        </div>
      </div>
    </header>
  );
}

function PillarCard({title, emoji, description, link}: (typeof PILLARS)[0]) {
  return (
    <div className={clsx('col col--4', styles.pillarCol)}>
      <div className={styles.pillarCard}>
        <div className={styles.pillarEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link} className={styles.pillarLink}>
          詳しく読む →
        </Link>
      </div>
    </div>
  );
}

function FunnelSection() {
  const {siteConfig} = useDocusaurusContext();
  const lineUrl = siteConfig.customFields?.lineUrl as string;

  return (
    <section className={styles.funnelSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          縁 enishi との出会い方
        </Heading>
        <div className={styles.funnelSteps}>
          {[
            {icon: '📱', label: 'SNS・note', desc: '日々の発信・読み物コンテンツ'},
            {icon: '📖', label: 'このサイト', desc: 'コンセプト・フレームワークを深く理解する'},
            {icon: '📩', label: 'LINE で繋がる', desc: 'まず話だけでも、気軽にどうぞ'},
            {icon: '🌿', label: '個別相談', desc: 'Being の探求セッション（有料）'},
          ].map((step, i) => (
            <div key={i} className={styles.funnelStep}>
              <div className={styles.funnelIcon}>{step.icon}</div>
              <div className={styles.funnelLabel}>{step.label}</div>
              <div className={styles.funnelDesc}>{step.desc}</div>
              {i < 3 && <div className={styles.funnelArrow}>↓</div>}
            </div>
          ))}
        </div>
        <div className={styles.funnelCta}>
          <a
            className={clsx('button button--lg', styles.lineBtn)}
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer">
            📩 LINE で相談する（無料）
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeroBanner />
      <main>
        <section className={styles.pillarsSection}>
          <div className="container">
            <div className="row">
              {PILLARS.map((p) => (
                <PillarCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>
        <FunnelSection />
      </main>
    </Layout>
  );
}
