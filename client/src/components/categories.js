import React from 'react';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default function Categories({ categories, selectedCategory, history }) {
	return (
		<div>
			<Divider />
			<List>
				{categories && categories.length > 0 ? (
					categories.map(category =>
						selectedCategory && selectedCategory === category.name ? (
							<ListItem key={category.path}>
								<Button disabled color="secondary">
									{category.name}
								</Button>
							</ListItem>
						) : (
							<ListItem key={category.path}>
								<Button
									color="secondary"
									onClick={() => history.push(category.name)}
								>
									{category.name}
								</Button>
							</ListItem>
						)
					)
				) : (
					<span>No categories</span>
				)}
				<Divider />
				<ListItem>
					<Button color="secondary" onClick={() => history.push('/')}>
						All categories
					</Button>
				</ListItem>
			</List>
		</div>
	);
}
