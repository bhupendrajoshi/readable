import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import uniqueString from 'unique-string';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing(),
		marginRight: theme.spacing(),
		width: '100%'
	},
	multilineTextField: {
		marginLeft: theme.spacing(),
		marginRight: theme.spacing(),
		width: '100%',
		height: '50px'
	}
});

class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: undefined,
			author: '',
			body: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateState(comment) {
		this.setState({
			id: comment && comment.id ? comment.id : undefined,
			author: comment && comment.author ? comment.author : '',
			body: comment && comment.body ? comment.body : ''
		});
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleSubmit(event) {
		event.preventDefault();
		const id = this.state.id ? this.state.id : uniqueString();
		this.props.updatedComment({ ...this.state, id: id, timestamp: Date.now() });
		this.updateState(undefined);
	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Grid container spacing={10} direction="column">
						<Grid item xs={5}>
							<TextField
								id="author"
								label="Author"
								required
								value={this.state.author}
								className={classes.textField}
								onChange={this.handleChange('author')}
							/>
						</Grid>

						<Grid item xs={5}>
							<TextField
								id="body"
								label="Body"
								required
								multiline
								rowsMax="20"
								value={this.state.body}
								className={classes.multilineTextField}
								onChange={this.handleChange('body')}
							/>
						</Grid>

						<Grid item>
							<Button type="submit">Save</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}

CommentForm.propTypes = {
	updatedComment: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentForm);
