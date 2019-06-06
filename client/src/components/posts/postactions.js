import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { Link } from 'react-router-dom';

import { deletePost } from '../../actions/posts';

const PostActions = props => {
	const { post, shouldGoBack, deletePost } = props;

	return (
		<div>
			<Link to={`${post.category}/editpost/${post.id}`}>
				<Button color="primary">
					<EditIcon />
				</Button>
			</Link>
			<Button
				color="secondary"
				onClick={() => {
					deletePost(post.id);
					if (shouldGoBack) props.history.goBack();
				}}
			>
				<DeleteIcon />
			</Button>
		</div>
	);
};

PostActions.propTypes = {
	post: PropTypes.object.isRequired,
	shouldGoBack: PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		deletePost: postId => dispatch(deletePost(postId))
	};
}

export default connect(
	undefined,
	mapDispatchToProps
)(PostActions);
