import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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
		height: '400px'
	},
	menu: {
		width: 200
	}
});

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		const { post } = this.props;

		let category = post && post.category ? post.category : '';

		if (category === undefined || category.length === 0) {
			category = this.props.categories[0].name;
		}

		this.state = {
			id: post && post.id ? post.id : undefined,
			title: post && post.title ? post.title : '',
			author: post && post.author ? post.author : '',
			body: post && post.body ? post.body : '',
			category: category
		};
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleSubmit(event) {
		event.preventDefault();
		const id = this.state.id ? this.state.id : uniqueString();
		this.props.updatedForm({ ...this.state, id: id, timestamp: Date.now() });
	}

	isValid() {
		return !(
			this.state.category === undefined || this.state.category.length === 0
		);
	}

	render() {
		const { classes, categories, history } = this.props;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Grid container spacing={10} direction="column">
						<Grid item xs={6}>
							<TextField
								id="title"
								label="Title"
								required
								value={this.state.title}
								className={classes.textField}
								onChange={this.handleChange('title')}
							/>
						</Grid>

						<Grid item xs={6}>
							<TextField
								id="author"
								label="Author"
								required
								value={this.state.author}
								className={classes.textField}
								onChange={this.handleChange('author')}
							/>
						</Grid>

						<Grid item xs={6}>
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
							<TextField
								id="category"
								required
								select
								label="Category"
								className={classes.textField}
								value={this.state.category}
								onChange={this.handleChange('category')}
								SelectProps={{
									MenuProps: { className: classes.menu }
								}}
								helperText="Please select post category"
								margin="normal"
							>
								{categories.map(option => (
									<MenuItem key={option.path} value={option.name}>
										{option.name}
									</MenuItem>
								))}
							</TextField>
						</Grid>

						<Grid item>
							<Button type="submit">Save</Button>
							<Button onClick={history.goBack}>Cancel</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	updatedForm: PropTypes.func.isRequired
};

function mapStateToProps({ categories }) {
	return {
		categories: categories.categories
	};
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
)(PostForm);
