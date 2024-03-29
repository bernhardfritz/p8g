import React from 'react';
import Link from '@docusaurus/Link';
import {findFirstCategoryLink, useDocById} from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './MyDocCard.module.css';
import isInternalUrl from '@docusaurus/isInternalUrl';

function CardContainer({href, children}) {
  const className = clsx(
    'card margin-bottom--lg padding--lg',
    styles.cardContainer,
    href && styles.cardContainerLink,
  );
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

function CardLayout({href, icon, title, description}) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      <div
        className={clsx('text--truncate', styles.cardDescription)}
        title={description}>
        {description}
      </div>
    </CardContainer>
  );
}

function CardCategory({item}) {
  const href = findFirstCategoryLink(item);
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={`${item.items.length} items`}
    />
  );
}

function CardLink({item}) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
    />
  );
}

function CardImage({item}) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardContainer href={item.href}>
      <div className={styles.flexGap}>
        <div className={styles.imgWrapper}>
          {item.icon}
        </div>
        <div className={styles.overflowHidden}>
          <h2 className={clsx('text--truncate', styles.cardTitle)} title={item.label}>
            {item.label}
          </h2>
          <div className={clsx('text--truncate', styles.cardDescription)} title={doc?.description}>
            {doc?.description}
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default function MyDocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;

    case 'category':
      return <CardCategory item={item} />;

    case 'image':
      return <CardImage item={item} />;

    default:
      return <CardLayout href={item.href} icon={item.icon} title={item.title} description={item.description} />;
  }
}
