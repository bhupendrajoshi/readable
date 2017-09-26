import React, { Component } from 'react';
import Posts from './posts';
import Categories from './categories';

class Home extends Component {
  render() {
    return (
      <div>
        <Posts />
        <Categories />
      </div>
    );
  }
}

export default Home;