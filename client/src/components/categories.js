import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, selectCategory } from '../actions'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.categories ? this.props.categories.map(category => (
            <li key={category.name}>
              <h3>{category.name}</h3>
            </li>
          )) : ''}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    categories: categories.categories,
    selectCategory: categories.selectCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    selectCategory: (data) => dispatch(selectCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
