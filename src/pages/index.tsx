// Updated Homepage Component with Full-Height Layout
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            {/* Add magenta badge/new product indicator */}
            <div className={styles.newBadge}>
              DOCUMENTACION
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              IFAM
            </Heading>
            <p className={styles.heroSubtitle}>
              Documentacion diseñada para desarrolladores y usuarios de productos IFAM con la plataforma CLOUD.
            </p>
            {/* Add the button here in the hero section */}
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.ctaButton)}
                to="/docs/intro">
                VER DOCUMENTACION
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.productShowcase}>
              <div className={styles.productImage}>
                {/* Enhanced placeholder with magenta accent border */}
                <div className={styles.imagePlaceholder}>
                  <div className={styles.productBorder}></div>
                  🔒 DOCUMENTACION
                  <div className={styles.productGlow}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Líder en Seguridad`}
      description="IFAM - Documentacion diseñada para desarrolladores y usuarios de productos IFAM con la plataforma CLOUD.">
      <div className={styles.homepageContainer}>
        <HomepageHeader />
        <main className={styles.homepageMain}>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}