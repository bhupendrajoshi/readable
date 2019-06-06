import React from 'react';
import { connect } from 'react-redux';

import PostForm from './postform';

import { createPost } from '../../actions/posts';

const NewPost = props => {
	return (
		<PostForm
			post={undefined}
			updatedForm={data => {
				props.createPost(data);
				props.history.goBack();
			}}
			history={props.history}
		/>
	);
};

function mapDispatchToProps(dispatch) {
	return {
		createPost: data => dispatch(createPost(data))
	};
}

export default connect(
	undefined,
	mapDispatchToProps
)(NewPost);
