import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors/index';

const theme = createMuiTheme({
	spacing: 5,
	palette: {
		primary: blue,
		secondary: pink,
		type: 'light'
	},
	typography: {
		button: {
			margin: 5
		}
	}
});

export default theme;
