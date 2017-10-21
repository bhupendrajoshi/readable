import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

function Sort(props) {
  const { classes, member, value, onChange } = props;
  return (
    <div className={classes.container}>
      <InputLabel className={classes.formControl} htmlFor="sort">{member}</InputLabel>
      <Select className={classes.formControl}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sort);