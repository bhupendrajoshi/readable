import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';

import uniqueString from 'unique-string';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  multilineTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    height: '400px',
  },
  menu: {
    width: 200,
  }
});

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const { post } = this.props;

    this.state = {
      id: post && post.id ? post.id : undefined,
      title: post && post.title ? post.title : '',
      author: post && post.author ? post.author : '',
      body: post && post.body ? post.body : '',
      category: post && post.category ? post.category : ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const id = this.state.id ? this.state.id : uniqueString();
    this.props.updatedForm({ ...this.state, id: id, timestamp: Date.now() });
  }

  isValid() {
    return !(this.state.category === undefined || this.state.category.length === 0)
  }

  render() {
    const { classes, categories } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={16} direction='column'>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                required
                value={this.state.title}
                className={classes.textField}
                onChange={this.handleChange('title')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="author"
                label="Author"
                required
                value={this.state.author}
                className={classes.textField}
                onChange={this.handleChange('author')}
              />
            </Grid>

            <Grid item xs={12}>
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
                  MenuProps: { className: classes.menu },
                }}
                helperText="Please select post category"
                margin="normal">

                {categories.map(option => (
                  <MenuItem key={option.path} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item>
              <Button type="submit">Save</Button>
              <Button onClick={browserHistory.goBack}>Cancel</Button>
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
    categories: categories.categories,
  }
}

export default compose(withStyles(styles), connect(mapStateToProps))(PostForm);
