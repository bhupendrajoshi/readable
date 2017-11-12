import React from 'react';

import { browserHistory } from 'react-router';

import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default function Categories({ categories, selectedCategory }) {
  return (
    <div>
      <Divider />
      <List>
        {categories && categories.length > 0 ? categories.map(category =>
          (
            selectedCategory && selectedCategory === category.name ?
              (
                <ListItem key={category.path}>
                  <Button
                    raised
                    disabled
                    color="accent"
                  >{category.name}
                  </Button>
                </ListItem>
              )
              :
              (
                <ListItem key={category.path}>
                  <Button
                    raised
                    color="accent"
                    onClick={() => browserHistory.push(category.name)}
                  >{category.name}
                  </Button>
                </ListItem>
              )
          ),
        ) : (<span>No categories</span>)}
        <Divider />
        <ListItem>
          <Button raised color="accent" onClick={() => browserHistory.push('/')}>All categories</Button>
        </ListItem>
      </List>
    </div>
  );
}
