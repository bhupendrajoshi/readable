import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import Sort from './controls/sort';
import PostMini from './posts/postmini';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			voteScoreSortOrder: 'Descending',
			timestampSortOrder: 'None'
		};
	}

	OrderPosts(posts) {
		let orderedPosts = [...posts];
		if (orderedPosts && orderedPosts.length > 0) {
			if (this.state.voteScoreSortOrder === 'Ascending') {
				orderedPosts = orderedPosts.sort(this.comparePostVoteScores);
			} else if (this.state.voteScoreSortOrder === 'Descending') {
				orderedPosts = orderedPosts.sort(this.comparePostVoteScores).reverse();
			}

			if (this.state.timestampSortOrder === 'Ascending') {
				orderedPosts = orderedPosts.sort(this.comparePostTimestamps);
			} else if (this.state.timestampSortOrder === 'Descending') {
				orderedPosts = orderedPosts.sort(this.comparePostTimestamps).reverse();
			}
		}

		return orderedPosts;
	}

	comparePostVoteScores(postA, postB) {
		return postA.voteScore - postB.voteScore;
	}

	comparePostTimestamps(postA, postB) {
		return postA.timestamp - postB.timestamp;
	}

	render() {
		const { posts } = this.props;
		const orderedPosts = this.OrderPosts(posts);

		return (
			<div>
				<Grid container spacing={10} direction="column">
					<Grid item container spacing={10}>
						<Grid item xs={2}>
							<Sort
								member="Vote Score"
								value={this.state.voteScoreSortOrder}
								onChange={value => {
									this.setState({ voteScoreSortOrder: value });
								}}
							/>
						</Grid>
						<Grid item xs={2}>
							<Sort
								member="Timestamp"
								value={this.state.timestampSortOrder}
								onChange={value => {
									this.setState({ timestampSortOrder: value });
								}}
							/>
						</Grid>
					</Grid>

					<Grid item xs>
						{orderedPosts && orderedPosts.length > 0 ? (
							orderedPosts.map(post => <PostMini key={post.id} post={post} />)
						) : (
							<span>No posts</span>
						)}
					</Grid>
				</Grid>
			</div>
		);
	}
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired
};

export default Posts;
