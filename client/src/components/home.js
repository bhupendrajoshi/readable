import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import { Link } from 'react-router';

import { fetchPosts } from '../actions/posts';
import { fetchCategories } from '../actions/categories';

import Posts from './posts';
import Categories from './categories';

class Home extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { posts, categories } = this.props;
    const selectedCategory = this.props.params.categoryname;
    const categoryPosts = selectedCategory ? posts.filter(p => p.category === selectedCategory) : posts;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={2}>
            <Link to={'newpost'}>
              <Button fab color="primary" ><AddIcon /></Button>
            </Link>

            <Categories categories={categories} selectedCategory={selectedCategory} />
          </Grid>
          <Grid item xs={10}>
            <Posts posts={categoryPosts} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts.posts.filter(p => !p.deleted),
    categories: categories.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: data => dispatch(fetchPosts(data)),
    getCategories: () => dispatch(fetchCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
