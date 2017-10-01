import React from 'react';

import Posts from './posts';
import Categories from './categories';

export default function Home() {
  return (
    <div>
      <Categories />
      <Posts />
    </div>
  );
}