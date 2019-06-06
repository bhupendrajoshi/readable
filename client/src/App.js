import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		width: '100%',
		zIndex: 1,
		overflow: 'hidden'
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%'
	},
	appBar: {
		position: 'absolute',
		width: '100%',
		order: 1
	},
	content: {
		width: '100%',
		padding: theme.spacing(3),
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64
		}
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<Typography type="title" color="inherit" noWrap>
								<Link to="/">Readable</Link>
							</Typography>
						</Toolbar>
					</AppBar>

					<main className={classes.content}>{this.props.children}</main>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
