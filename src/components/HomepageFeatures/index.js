import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        AI Power is designed to be easily installed and used, enabling you to enhance your WordPress website with advanced AI capabilities quickly and effortlessly.
      </>
    ),
  },
  {
    title: 'Focus on Your Content',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        AI Power allows you to concentrate on your content, while we handle the technical aspects. Simply install our plugin, and let it do the heavy lifting.
      </>
    ),
  },
  {
    title: 'Powered by GPT-4',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        AI Power offers the ability to extend or customize your website's capabilities, all powered by the state-of-the-art GPT-4 model.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
