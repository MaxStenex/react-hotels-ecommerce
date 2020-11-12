import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 13,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});

export default theme;
