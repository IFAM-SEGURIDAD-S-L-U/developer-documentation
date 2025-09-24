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
            {/* Professional badge with better contrast */}
            <div className={styles.newBadge}>
              PLATAFORMA CLOUD
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              IFAM Security
            </Heading>
            <p className={styles.heroSubtitle}>
              Portal técnico integral para desarrolladores y administradores. 
              Accede a guías completas, APIs y recursos para implementar 
              soluciones de seguridad empresarial con la plataforma IFAM Cloud.
            </p>
            {/* Improved button styling */}
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.ctaButton)}
                to="/docs/intro">
                EXPLORAR GUÍA
              </Link>
            </div>
            
            {/* Trust indicators for professionalism */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>API REST Completa</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>⚡</span>
                <span>Integración Rápida</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🔒</span>
                <span>Seguridad Empresarial</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.productShowcase}>
              <div className={styles.productImage}>
                {/* More professional placeholder */}
                <div className={styles.imagePlaceholder}>
                  <div className={styles.productBorder}></div>
                  <div className={styles.placeholderContent}>
                    <div className={styles.placeholderText}>Portal Técnico</div>
                    <div className={styles.placeholderSubtext}>APIs & Guías</div>
                  </div>
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
      title={`${siteConfig.title} - Portal Técnico`}
      description="Portal técnico IFAM Cloud - Documentación completa para desarrolladores, APIs, guías de integración y recursos de seguridad empresarial.">
      <div className={styles.homepageContainer}>
        <HomepageHeader />
        <main className={styles.homepageMain}>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}