import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Beginner friendly',
    description: (
      <>
        p8g has been developed for individuals interested in getting into creative programming no matter the experience.
      </>
    ),
  },
  {
    title: 'Language-agnostic',
    description: (
      <>
        p8g is available for both C and Java allowing further language bindings to be developed.
      </>
    ),
  },
  {
    title: 'Cross-platform',
    description: (
      <>
        p8g applications can be developed on and built for all major operating systems including Windows, Linux and macOS as well as the web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
