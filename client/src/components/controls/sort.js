import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing(),
		minWidth: 120
	}
});

function Sort(props) {
	const { classes, member, value, onChange } = props;
	return (
		<div className={classes.container}>
			<InputLabel className={classes.formControl} htmlFor="sort">
				{member}
			</InputLabel>
			<Select
				className={classes.formControl}
				value={value}
				onChange={e => onChange(e.target.value)}
				input={<Input id="sort" />}
			>
				<MenuItem value={'None'}>None</MenuItem>
				<MenuItem value={'Ascending'}>Ascending</MenuItem>
				<MenuItem value={'Descending'}>Descending</MenuItem>
			</Select>
		</div>
	);
}

Sort.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sort);
