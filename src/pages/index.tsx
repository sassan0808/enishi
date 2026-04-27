import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const PILLARS = [
  {
    title: '「なぜ」のメカニズムから',
    emoji: '💧',
    description:
      '「付き合う人が大切」とは言われる。でもなぜかを説明できる人はいなかった。H₂O モデルで、意識の相転移のメカニズムから伝えます。',
    link: '/docs/フレームワーク/意識の相転移',
  },
  {
    title: 'Being を起点に',
    emoji: '🌱',
    description:
      '外側がどうであれ「それも素敵だ」という視点が自然に生まれる状態。そこへ向かうプロセスを、哲学・量子力学・AI を通じて探求します。',
    link: '/docs/コンセプト/Beingとは',
  },
  {
    title: '気楽に、生きる',
    emoji: '🌿',
    description:
      '気楽とは、気が楽になること。削ぎ落とされていくことで、自然と軽くなる。答えを足すのではなく、余分なものが溶けていく。',
    link: '/docs/コンセプト/パラダイムシフトの地図',
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
              外側は整っているのに満たされない。<br />
              本音で話せる人がいない。<br />
              自分の判断軸を育てたい。
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
