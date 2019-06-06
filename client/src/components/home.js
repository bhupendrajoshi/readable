import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { Link } from 'react-router-dom';

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
		const {
			posts,
			categories,
			history,
			match: {
				params: { categoryname }
			}
		} = this.props;

		const categoryPosts = categoryname
			? posts.filter(p => p.category === categoryname)
			: posts;

		return (
			<div>
				<Grid container spacing={10}>
					<Grid item xs={2}>
						<Link to={'newpost'}>
							<Button color="primary">
								<AddIcon />
							</Button>
						</Link>

						<Categories
							categories={categories}
							selectedCategory={categoryname}
							history={history}
						/>
					</Grid>
					<Grid item xs={8}>
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
		categories: categories.categories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPosts: data => dispatch(fetchPosts(data)),
		getCategories: () => dispatch(fetchCategories())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
