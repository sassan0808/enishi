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
  const linePersonal = siteConfig.customFields?.linePersonal as string;
  const lineBiz = siteConfig.customFields?.lineBiz as string;

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

function ContactSection() {
  const {siteConfig} = useDocusaurusContext();
  const linePersonal = siteConfig.customFields?.linePersonal as string;
  const lineBiz = siteConfig.customFields?.lineBiz as string;

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          つながる
        </Heading>
        <p className={styles.sectionDesc}>
          料金・詳細は LINE にてご案内しています。
        </p>
        <div className={styles.contactCards}>
          <div className={styles.contactCard}>
            <div className={styles.contactCardIcon}>🌱</div>
            <Heading as="h3" className={styles.contactCardTitle}>個人の方</Heading>
            <p className={styles.contactCardDesc}>
              自分の在り方を探求したい。<br />
              Inside-Out の生き方に関心がある。
            </p>
            <a
              href={linePersonal}
              className={clsx(styles.lineBtn)}
              target="_blank"
              rel="noopener noreferrer">
              📩 LINE でつながる
            </a>
          </div>
          <div className={clsx(styles.contactCard, styles.contactCardBiz)}>
            <div className={styles.contactCardIcon}>🏢</div>
            <Heading as="h3" className={styles.contactCardTitle}>経営者・法人の方</Heading>
            <p className={styles.contactCardDesc}>
              経営・組織の根本を問い直したい。<br />
              伴走者として話せる相手が欲しい。
            </p>
            <a
              href={lineBiz}
              className={clsx(styles.lineBtn, styles.lineBtnBiz)}
              target="_blank"
              rel="noopener noreferrer">
              📩 LINE でつながる
            </a>
          </div>
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
        <ContactSection />
      </main>
    </Layout>
  );
}
