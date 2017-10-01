import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { fetchCategories, selectCategory } from '../actions/categories'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories, selectedCategory, selectCategory } = this.props;

    return (
      <div>
        {categories && categories.length > 0 ? categories.map(category =>
          (
            selectedCategory && selectedCategory === category ?
              (
                <Button raised disabled color="accent"
                  key={category.path}
                  onClick={() => selectCategory(category)}>{category.name}
                </Button>
              )
              :
              (
                <Button raised color="accent"
                  key={category.path}
                  onClick={() => selectCategory(category)}>{category.name}
                </Button>
              )
          )
        ) : (<span>No categories</span>)}
        <Button raised color="accent" onClick={() => selectCategory(undefined)}>All categories</Button>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    categories: categories.categories,
    selectedCategory: categories.selectedCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    selectCategory: (data) => dispatch(selectCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
