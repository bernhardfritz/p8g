import React from 'react';
import MyDocCard from './MyDocCard';

export default function MyDocCardList({items}) {
  return (
    <div className="row">
      {items.map((item, index) => (
        <article key={index} className="col col--6">
          <MyDocCard item={item} />
        </article>
      ))}
    </div>
  );
}
