// Enhanced HomepageFeatures with magenta accents
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>
          <span className={styles.iconEmoji}>{icon}</span>
        </div>
        <div className={styles.serviceContent}>
          <Heading as="h3" className={styles.serviceTitle}>{title}</Heading>
          <p className={styles.serviceDescription}>{description}</p>
        </div>
        {/* Magenta accent border */}
        <div className={styles.cardAccent}></div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  // If no features, return null to avoid rendering empty container
  if (FeatureList.length === 0) {
    return null;
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}