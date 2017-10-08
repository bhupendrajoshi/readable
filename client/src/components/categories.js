import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import { fetchCategories, selectCategory } from '../actions/categories'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories, selectedCategory, selectCategory } = this.props;

    return (
      <div>
        <Divider />
        <List>
          {categories && categories.length > 0 ? categories.map(category =>
            (
              selectedCategory && selectedCategory === category ?
                (
                  <ListItem key={category.path}>
                    <Button raised disabled color="accent"
                      onClick={() => selectCategory(category)}>{category.name}
                    </Button>
                  </ListItem>
                )
                :
                (
                  <ListItem key={category.path}>
                    <Button raised color="accent"
                      onClick={() => selectCategory(category)}>{category.name}
                    </Button>
                  </ListItem>
                )
            )
          ) : (<span>No categories</span>)}
          <Divider />
          <ListItem>
            <Button raised color="accent" onClick={() => selectCategory(undefined)}>All categories</Button>
          </ListItem>
        </List>
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
