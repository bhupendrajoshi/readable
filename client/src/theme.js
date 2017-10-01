import { createMuiTheme } from 'material-ui/styles';
import { blue, pink } from 'material-ui/colors/index';

const theme = createMuiTheme({
  spacing: {
    unit: 5
  },
  palette: {
    primary: blue,
    secondary: pink,
    type: 'light',
  },
  typography: {
    button: {
      margin: 5
    }
  }
});

export default theme;